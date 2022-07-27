# LCM-PRODUCT-CARD

Paquete de pruebas de despliegue de NPM

### Ejemplo Leandro Cristiano

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'lcm-product-card';
```

```
<ProductCard
  product={product}
  initialValues={{
            count: 0,
            maxCount: 15,
          }} >
  {({ reset, isMaxCountReached, maxCount, increaseBy, count }) => (
  <>
  <ProductImage />
  <ProductTitle  />
  <ProductButtons  />
  </>
  )}
</ProductCard>
```