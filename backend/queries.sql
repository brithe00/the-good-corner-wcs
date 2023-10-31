DROP TABLE ad;
DROP TABLE category;

CREATE TABLE ad (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  author TEXT NOT NULL,
  price INTEGER,
  createdAt TEXT,
  imageUrl TEXT,
  city TEXT,
  category TEXT
);

insert into ad (id, title, description, author, price, createdAt, imageUrl, city, category) values (1, 'Librarian', 'vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros', 'Joana Deam', 34, '12/25/2022', 'http://dummyimage.com/196x100.png/dddddd/000000', 'Bordeaux', 'erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam'),
(2, 'Business Systems Development Analyst', 'sapien varius ut blandit non interdum in ante vestibulum ante', 'Elizabet Ivasechko', 36, '9/1/2023', 'http://dummyimage.com/110x100.png/5fa2dd/ffffff', 'Paris', 'et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin'),
(3, 'Senior Sales Associate', 'faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio', 'Russell Bottelstone', 95, '1/22/2023', 'http://dummyimage.com/194x100.png/ff4444/ffffff', 'Lyon', 'et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id'),
(4, 'Account Executive', 'est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices', 'Genny Romney', 36, '1/9/2023', 'http://dummyimage.com/151x100.png/cc0000/ffffff', 'Bordeaux', 'elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas'),
(5, 'Account Representative IV', 'est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia', 'Elysia Kitto', 34, '12/22/2022', 'http://dummyimage.com/128x100.png/dddddd/000000', 'Paris', 'maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas'),
(6, 'Compensation Analyst', 'ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor', 'Shaun Itzakson', 63, '9/4/2023', 'http://dummyimage.com/186x100.png/cc0000/ffffff', 'Lyon', 'faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus'),
(7, 'VP Product Management', 'ut suscipit a feugiat et eros vestibulum ac est lacinia', 'Casandra Skelington', 9, '8/29/2023', 'http://dummyimage.com/226x100.png/5fa2dd/ffffff', 'Bordeaux', 'in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus'),
(8, 'Professor', 'sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus', 'Artemis Yokley', 3, '9/9/2023', 'http://dummyimage.com/164x100.png/cc0000/ffffff', 'Paris', 'et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl'),
(9, 'Nurse Practicioner', 'neque sapien placerat ante nulla justo aliquam quis turpis eget', 'Beale Bilyard', 71, '10/12/2022', 'http://dummyimage.com/162x100.png/dddddd/000000', 'Lyon', 'non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus'),
(10, 'Structural Engineer', 'leo odio porttitor id consequat in consequat ut nulla sed accumsan felis', 'Michele McCole', 24, '9/1/2023', 'http://dummyimage.com/176x100.png/5fa2dd/ffffff', 'Bordeaux', 'faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin'),
(11, 'Health Coach IV', 'leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu', 'Kara-lynn Kilbride', 92, '3/19/2023', 'http://dummyimage.com/242x100.png/5fa2dd/ffffff', 'Paris', 'urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius'),
(12, 'Human Resources Assistant II', 'eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id', 'Krishna Lamplough', 11, '1/2/2023', 'http://dummyimage.com/211x100.png/dddddd/000000', 'Lyon', 'lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien'),
(13, 'Internal Auditor', 'venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien', 'Mikey Casin', 13, '7/19/2023', 'http://dummyimage.com/140x100.png/cc0000/ffffff', 'Bordeaux', 'in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices'),
(14, 'Computer Systems Analyst II', 'amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in', 'Jacquetta Defries', 18, '7/8/2023', 'http://dummyimage.com/237x100.png/ff4444/ffffff', 'Paris', 'scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis'),
(15, 'Geologist IV', 'id luctus nec molestie sed justo pellentesque viverra pede ac diam cras', 'Keir Raymond', 69, '2/1/2023', 'http://dummyimage.com/174x100.png/dddddd/000000', 'Lyon', 'sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec'),
(16, 'Safety Technician IV', 'enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor', 'Hetti Davson', 39, '6/25/2023', 'http://dummyimage.com/100x100.png/ff4444/ffffff', 'Bordeaux', 'ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti'),
(17, 'Nuclear Power Engineer', 'gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi', 'Josee Bahike', 65, '4/18/2023', 'http://dummyimage.com/188x100.png/ff4444/ffffff', 'Paris', 'in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum'),
(18, 'VP Accounting', 'ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices', 'Timmie Flannery', 11, '2/22/2023', 'http://dummyimage.com/139x100.png/dddddd/000000', 'Lyon', 'pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi'),
(19, 'Research Assistant I', 'luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti', 'Aguistin McCandless', 66, '12/31/2022', 'http://dummyimage.com/243x100.png/dddddd/000000', 'Bordeaux', 'et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet'),
(20, 'Software Engineer I', 'vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra', 'Dru Phripp', 72, '7/20/2023', 'http://dummyimage.com/222x100.png/cc0000/ffffff', 'Paris', 'nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere');



CREATE TABLE category (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT
);

INSERT INTO category (title, description) VALUES ('Product category', 'This is the product category'),
 ('Invoice category', 'This is the invoice category'), 
 ('Customer category', 'This is the customers category');


 -- SQLite

-- SELECT * FROM ad;

-- SELECT * FROM ad WHERE city = 'Bordeaux';

-- DELETE FROM  ad WHERE price > 40;

-- UPDATE ad SET price = 0 WHERE createdAt = '9/1/2023';

-- SELECT AVG(price) FROM ad WHERE city = "Paris";

