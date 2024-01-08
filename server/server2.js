const express = require('express');
const fs = require('fs');
const multer = require('multer');
const app = express();

// Multer 설정: 이미지 파일을 'uploads/' 폴더에 저장합니다.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1]);
  }
});
const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST 요청을 처리하는 '/api/products' 엔드포인트
app.post('/api/products', upload.single('image'), (req, res) => {
  const productData = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    stock: req.body.stock,
    imageFilePath: req.file ? req.file.path : null // 이미지 파일 경로
  };

  // product.json 파일을 읽어 기존 상품 데이터를 불러옵니다.
  fs.readFile('public/product.json', (err, data) => {
    if (err && err.code === 'ENOENT') {
      // 파일이 존재하지 않으면 새로 생성합니다.
      fs.writeFile('public/product.json', JSON.stringify([productData], null, 2), (err) => {
        if (err) return res.status(500).send('Error writing new product to file');
        return res.status(201).send('New product added');
      });
    } else if (err) {
      // 다른 오류가 발생했을 경우
      return res.status(500).send('Error reading products file');
    } else {
      // 파일이 존재하면 기존 내용에 추가합니다.
      const products = JSON.parse(data);
      products.push(productData);
      fs.writeFile('public/product.json', JSON.stringify(products, null, 2), (err) => {
        if (err) return res.status(500).send('Error adding product to file');
        return res.status(201).send('Product added');
      });
    }
  });
});

// 서버 시작
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});