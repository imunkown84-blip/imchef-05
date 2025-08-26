import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductCard from '../components/ProductCard';
import { sampleProducts } from '../data/products';
import heroBanner from '../assets/hero-banner.jpg';

const Home = () => {
  const featuredProducts = sampleProducts.filter(product => product.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Delicious noodles and sauces"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center space-y-6 container-padding max-w-4xl">
          <Badge className="bg-secondary text-secondary-foreground text-sm font-medium px-4 py-2">
            🔥 New Arrivals Available
          </Badge>
          
          <h1 className="font-heading font-bold text-5xl md:text-7xl text-white leading-tight animate-fade-in">
            Authentic Flavors
            <span className="block text-gradient">Delivered Fresh</span>
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto animate-slide-up">
            Discover our premium collection of handcrafted noodles and authentic sauces. 
            From traditional recipes to bold new flavors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button asChild size="lg" className="btn-gradient text-lg px-8 py-6">
              <Link to="/shop">
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-background">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="text-primary border-primary">
              Featured Products
            </Badge>
            <h2 className="font-heading font-bold text-4xl text-foreground">
              Bestsellers & Customer Favorites
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our most popular products loved by food enthusiasts worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/shop">
                View All Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-muted">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-heading font-bold text-4xl text-foreground">
              Shop by Category
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our carefully curated categories of premium products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Noodles Category */}
            <Link to="/shop?category=noodles" className="group">
              <div className="relative h-80 rounded-xl overflow-hidden card-hover bg-card border border-border">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <h3 className="font-heading font-bold text-3xl text-foreground">
                      Premium Noodles
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Authentic recipes from around the world
                    </p>
                    <Button className="btn-gradient">
                      Shop Noodles
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Sauces Category */}
            <Link to="/shop?category=sauces" className="group">
              <div className="relative h-80 rounded-xl overflow-hidden card-hover bg-card border border-border">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <h3 className="font-heading font-bold text-3xl text-foreground">
                      Artisan Sauces
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Bold flavors that transform every meal
                    </p>
                    <Button className="btn-gradient">
                      Shop Sauces
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground">Premium Quality</h3>
              <p className="text-muted-foreground text-sm">
                Only the finest ingredients and traditional methods
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground">Fast Delivery</h3>
              <p className="text-muted-foreground text-sm">
                Free shipping on orders over $50
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground">Secure Shopping</h3>
              <p className="text-muted-foreground text-sm">
                Your information is always protected
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Headphones className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground">24/7 Support</h3>
              <p className="text-muted-foreground text-sm">
                Here to help whenever you need us
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;