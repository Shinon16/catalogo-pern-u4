
import { sql } from "../db.js";

export const getProducts = async (req, res) => {
  try {
    const rows = await sql`
      SELECT id, name, price, image
      FROM products
      ORDER BY id ASC
    `;

    const products = rows.map((product) => ({
      ...product,
      price: Number(product.price)
    }));

    res.status(200).json({
      data: products
    });

  } catch (error) {
    console.error("Error al obtener productos:", error);

    res.status(500).json({
      error: "Error al consultar los productos"
    });
  }
};
