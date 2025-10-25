import { products } from "@/lib/products"
import ProductModal from "@/components/product-modal"



export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = products.find((p) => p.id === Number(id))

  if (!product) return <div className="p-10">Product not found</div>

  return (
    <div className="p-10">
      <ProductModal product={product} />
    </div>
  )
}
