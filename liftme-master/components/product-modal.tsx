"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Product } from "@/lib/products"



export default function ProductModal({ product }: { product: Product }) {
  return (
    <Dialog defaultOpen>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <p>{product.description}</p>
          <p className="text-lg font-semibold">${product.price}</p>
          <Button>Add to Cart</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
