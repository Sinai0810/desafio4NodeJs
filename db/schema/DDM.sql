 INSERT INTO inventario (nombre, categoria, metal, precio, stock) VALUES
('Collar Heart', 'collar', 'oro', 25000, 4),
('Collar History', 'collar', 'plata', 12000, 10),
('Aros Berry', 'aros', 'plata', 15000, 5),
('Aros Hook Blue', 'aros', 'oro', 20000, 2),
('Anillo Wish', 'anillo', 'oro', 40000, 2),
('Anillo Cuarzo Greece', 'anillo', 'oro', 20000, 2),
('Anillo Plata', 'anillo', 'plata', 30000, 4);

SELECT * FROM inventario ORDER BY stock ASC;
SELECT * FROM inventario 
WHERE precio >= 2500 AND precio <= 30000 
AND categoria = 'aros' 
AND metal = 'plata';

SELECT * FROM inventario WHERE id = 1;

SELECT COUNT(*) FROM inventario;

SELECT SUM(stock) FROM inventario;

