"use client"

import Card from '../components/Card';
import Button from '../components/Button';

export default function ProductsPage() {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">Products</h1>
            <p className="mb-4 text-center">Welcome</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 justify-items-center">
                <Card 
                    imageUrl="/product1.jpg" 
                    title="Bananita" 
                    description="Bananosa." 
                    href="/product/1" 
                >
                    <Button href="">Buy</Button>
                </Card>
                <Card 
                    imageUrl="/product2.jpg" 
                    title="Frutilla" 
                    description="Frutillita." 
                    href="/product/2" 
                >
                    <Button href="">Buy</Button>
                </Card>
                <Card 
                    imageUrl="/product3.jpg" 
                    title="Manzana verde" 
                    description="Manzanita." 
                    href="/product/3" 
                >
                    <Button href="">Buy</Button>
                </Card>
                <Card 
                    imageUrl="/product4.jpg" 
                    title="Pera" 
                    description="Perita." 
                    href="/product/4" 
                >
                    <Button href="">Buy</Button>
                </Card>
            </div>
            <div className="flex justify-center">
                <Button href="/">Go back to Home</Button>
            </div>
        </div>
    )
}