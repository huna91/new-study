// mysql 편하게 쓰기
// swquilize 사용 , FOREIGN KEY 사용
// 관계형 데이터베이스 제작

const express = require("express");

const mysql = require("mysql2");
const config = require("./config");

const client = mysql.createConnection(config.dev, () => {
  console.log("데이터베이스 연결 됨");
});

// const sql =
//   "CREATE TABLE users (id INT AUTO_INCREMENT, username varchar(255), PRIMARY KEY (id));";
// const sql2 =
//   "CREATE TABLE items (id INT AUTO_INCREMENT,name varchar(255),price INT,image varchar(255),PRIMARY KEY (id));";
// const sql3 =
//   "CREATE TABLE orders (id INT AUTO_INCREMENT,user_id INT,total_price INT,created_at datetime DEFAULT CURRENT_TIMESTAMP,PRIMARY KEY (id));";
// const sql4 =
//   "CREATE TABLE order_items (id INT AUTO_INCREMENT,order_id INT,item_id INT,order_quantity INT,PRIMARY KEY (id));";
// const sql5 =
//   "ALTER TABLE orders ADD FOREIGN KEY (user_id) REFERENCES users (id);";
// const sql6 =
//   "ALTER TABLE order_items ADD FOREIGN KEY (order_id) REFERENCES orders (id);";
// const sql7 =
//   "ALTER TABLE order_items ADD FOREIGN KEY (item_id) REFERENCES items (id);";

// client.query(sql + sql2 + sql3 + sql4 + sql5 + sql6 + sql7);

// const sql8 = `INSERT INTO items (name, price, image) VALUES ('첫번째',1000,"/"),('두번째',2000,"/");`;
// const sql9 = `INSERT INTO users (username) VALUES ('와우');`;

// client.query(sql8 + sql9);

// INNER JOIN : 참조된 테이블들 중 두개 테이블의 공통된 부분만 합치는 것을 말한다.
// => 여기서는 id, user_id, order_id, item_id 끼리 합쳐짐

// SELECT 부분이 찾을 값들 = FROM 전까지 값들
/*
INNER JOIN order_items ON (order_items.item_id = items.id)
=> order_items의 item_id 값과 items테이블의 id 값과 같은 값을 가진 것들을 합친다
*/
const sql13 = `SELECT orders.id, orders.created_at,
orders.total_price, items.name, items.price, items.image,
order_items.order_quantity FROM items
INNER JOIN order_items ON (order_items.item_id = items.id)
INNER JOIN orders ON (orders.id = order_items.order_id)
WHERE (orders.user_id = ?)`;

client.query(sql13, [1], (err, result) => {
  console.log(result);
});
