import mariadb from 'mariadb';

const pool = mariadb.createPool({
  host: '192.168.100.83',
  user: 'root',
  password: 'root',
  database: 'form',
});

export const getConnection = async () => {
  return await pool.getConnection();
};
