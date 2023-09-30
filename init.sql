DROP DATABASE IF EXISTS practice_schema;
CREATE DATABASE practice_schema DEFAULT CHARACTER SET utf8;

USE practice_schema;

DROP TABLE IF EXISTS accounts;

CREATE TABLE `accounts`
(
    `id`      int(11) NOT NULL AUTO_INCREMENT,
    `name`   varchar(128) DEFAULT Null,
    `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);

INSERT INTO accounts
VALUES (1, '山田', NOW(), NOW());
INSERT INTO accounts
VALUES (2, '佐藤', NOW(), NOW());
INSERT INTO accounts
VALUES (3, '田中', NOW(), NOW());