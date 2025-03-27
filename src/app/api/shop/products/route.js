import { NextResponse } from "next/server";
import connectDB from "@/utils/mongodb"; // We'll create this next
import Product from "@/models/Product";  // Import the Product model

export async function GET() {
  try {
    await connectDB(); // Ensure database connection
    const products = await Product.find(); // Fetch products
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

