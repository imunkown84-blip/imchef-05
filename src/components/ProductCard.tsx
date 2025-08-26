import React from 'react';
import { ShoppingCart, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const getSpiceColor = (level?: string) => {
    switch (level) {
      case 'mild': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hot': return 'bg-orange-100 text-orange-800';
      case 'extra-hot': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSpiceIcons = (level?: string) => {
    const count = level === 'mild' ? 1 : level === 'medium' ? 2 : level === 'hot' ? 3 : level === 'extra-hot' ? 4 : 0;
    return Array.from({ length: count }, (_, i) => (
      <Flame key={i} className="w-3 h-3 fill-current" />
    ));
  };

  return (
    <Card className="group card-hover border-border bg-card">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="aspect-square relative overflow-hidden rounded-t-lg bg-muted">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.featured && (
            <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
              Featured
            </Badge>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Badge variant="destructive">Out of Stock</Badge>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-xs">
                {product.category}
              </Badge>
              {product.spiceLevel && (
                <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${getSpiceColor(product.spiceLevel)}`}>
                  {getSpiceIcons(product.spiceLevel)}
                  <span className="ml-1 capitalize">{product.spiceLevel}</span>
                </div>
              )}
            </div>
            
            <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            
            <p className="text-muted-foreground text-sm line-clamp-2">
              {product.description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-heading font-bold text-xl text-foreground">
              ${product.price.toFixed(2)}
            </span>
            
            <Button
              onClick={() => addToCart(product)}
              disabled={!product.inStock}
              className="btn-gradient"
              size="sm"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;