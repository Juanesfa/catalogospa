import { Injectable } from '@angular/core';
import { IProduct } from '../Models/product.=mode';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  listaProductos: IProduct[] = [
    { id: 1, name: 'Shampoo Orgánico', price: 12.99, details: 'Shampoo natural para cabello seco.', image: 'https://static.salcobrandonline.cl/spree/products/72053/large/4420058-1.jpg?1651776672' },
    { id: 2, name: 'Crema Hidratante', price: 18.50, details: 'Crema facial con ingredientes naturales.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRINvPRK6WourfChlyMmvH-yeiZJoREwtmJxg&s' },
    { id: 3, name: 'Jabón Artesanal', price: 5.99, details: 'Jabón elaborado a mano con esencias.', image: 'https://i.etsystatic.com/20804400/r/il/5a5a28/5941590049/il_570xN.5941590049_3giy.jpg' },
    { id: 4, name: 'Aceite Esencial', price: 8.99, details: 'Aceite esencial de lavanda para relajación.', image: 'https://greenharmony.com.ec/cdn/shop/products/GH-AceiteesencialOregano5ml_530x@2x.jpg?v=1624681671' },
    { id: 5, name: 'Exfoliante Facial', price: 10.75, details: 'Exfoliante suave para todo tipo de piel.', image: 'https://images-1.eucerin.com/~/media/eucerin%20relaunch%20media/eucerin/local/latam/packshot/dermopure/88984-exfoliante_packshot.jpg?rx=0&ry=0&rw=2000&rh=2000&hash=CFC1EA543162763F06D99230F8BB76C8' },
    { id: 6, name: 'Mascarilla Facial', price: 14.50, details: 'Mascarilla hidratante para todo tipo de piel.', image: 'https://http2.mlstatic.com/D_NQ_NP_670252-MCO42229618842_062020-O.webp' },
    { id: 7, name: 'Serum Antiarrugas', price: 25.99, details: 'Serum con efecto anti-envejecimiento.', image: 'https://victashop.com/wp-content/uploads/2021/06/serum-anti-arrugas-hyalu-b5.jpg' },
    { id: 8, name: 'Crema de Manos', price: 6.99, details: 'Crema hidratante para manos.', image: 'https://images-1.eucerin.com/~/media/eucerin%20relaunch%20media/eucerin/local/latam/packshot/ph5/63154_eucerin-ph5-crema-para-manos-75ml_packshot.jpg?mw=290&devicepixelratio=2&h=290&w=290&rh=0&hash=A501E084A1760AE38E5A34CA670109A4' },
    { id: 9, name: 'Gel de Ducha', price: 9.50, details: 'Gel para ducha con aroma refrescante.', image: 'https://images.deprati.com.ec/sys-master/images/hdb/hd3/11953513758750/17127196-0_product_515Wx772H' },
    { id: 10, name: 'Loción Corporal', price: 13.99, details: 'Loción hidratante para el cuerpo.', image: 'https://kosmetikaonline.com/cdn/shop/products/Cremamulticreamnutrients.png?v=1656342205' },
    { id: 11, name: 'Protector Solar', price: 19.99, details: 'Protección solar SPF 50.', image: 'https://www.arcamia.com/wp-content/uploads/2024/08/Eucerin-Prot-solar-hydro-fluid.jpg' },
    { id: 12, name: 'Tónico Facial', price: 11.75, details: 'Tónico refrescante para el rostro.', image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1727458040-tonico-facial-02-66f6eaec3f906.jpg?crop=1xw:1xh;center,top&resize=980:*' },
    { id: 13, name: 'Crema de Noche', price: 20.50, details: 'Crema reparadora para la noche.', image: 'https://images-1.eucerin.com/~/media/eucerin%20relaunch%20media/eucerin/local/latam/sales%20visuals/hyaluron-filler-elasticity/2023/69678%20crema%20facial%20de%20noche%2050ml/v2/latamespecn69678crema%20facial%20antiarrugas%20eucerin%20elasticityfiller%20noche%2050ml323sales%20visualproduct.png?rx=0&ry=0&rw=2000&rh=2000&hash=B66E6E51B90B4696F8E55F5E0EE893FA' },
    { id: 14, name: 'Peeling Facial', price: 15.99, details: 'Peeling químico suave.', image: 'https://media.vogue.es/photos/64e48c699bf4c13dfece8ce5/3:4/w_748%2Cc_limit/11429303-2815023393446759.jpg' },
    { id: 15, name: 'Bálsamo Labial', price: 4.99, details: 'Bálsamo hidratante para labios.', image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/mby/mby42459/y/11.jpg' },
    { id: 16, name: 'Agua Micelar', price: 7.99, details: 'Limpieza facial suave y eficaz.', image: 'https://hips.hearstapps.com/ellees.h-cdn.co/assets/17/44/1509356697-agua-micelar-bioderma.jpg?resize=980:*' },
    { id: 17, name: 'Gel Antibacterial', price: 3.50, details: 'Gel desinfectante de manos.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD2c-rD3hxPNTud8y9o71noUb7OCGMow99DK_ekSuqY3NlH4as210lJSI1W886naue7IA&usqp=CAU' },
    { id: 18, name: 'Aceite Corporal', price: 12.75, details: 'Aceite hidratante para el cuerpo.', image: 'https://www.gloriasaltos.com/wp-content/uploads/2023/08/150127.jpg' },
    { id: 19, name: 'Sales de Baño', price: 9.25, details: 'Sales relajantes para baño.', image: 'https://www.aromavida.com/wp-content/uploads/2020/07/aromavida-sales-de-ban%CC%83o-citrus-250g.jpg' },
    { id: 20, name: 'Espuma Limpiadora', price: 10.50, details: 'Espuma para limpieza facial profunda.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORPX5q0wcDm9RsCuS4scL8mRtFwAB0_RGtQ&s' }
  ];

  getProducts(): IProduct[] {
    return this.listaProductos;
  }

  getProductById(id: number): IProduct | undefined {
    return this.listaProductos.find(product => product.id === id);
  }
}