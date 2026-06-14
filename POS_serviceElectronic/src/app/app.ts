import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'SoluTech-Landing';

  paqueteComercio = {
    titulo: 'Paquete Punto de Venta Completo',
    precio: '$4,499',
    imagenes: [
      'https://images.unsplash.com/photo-1647427017067-8f33ccbae493?q=80&w=870&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1106&auto=format&fit=crop'
    ],
    includes: [
      { text: 'Computadora completa ', bold: ' Semi nueva', highlightClass: 'highlight-dark' },
      { text: 'Impresora de ticket 58 mm ', bold: ' NUEVA', highlightClass: 'highlight-blue' },
      { text: 'Cajón de dinero ', bold: ' NUEVO', highlightClass: 'highlight-blue' },
      { text: 'Lector de códigos de barras ', bold: ' NUEVO', highlightClass: 'highlight-blue' },
      { text: 'Garantía de 6 meses', bold: '', highlightClass: '' }
    ],
    features: ['📈 Ventas', '💳 Control de Créditos', '📦 Inventarios', '💰 Corte de Caja']
  };

  paquetesRestaurant = [
    {
      id: 'paquete-1',
      titulo: 'Soft Restaurant Básico',
      precio: '$5,500',
      badge: 'Paquete #1',
      badgeColor: 'blue',
      isPremium: false,
      imagen: 'https://images.unsplash.com/photo-1602665478334-f8c4fd62ede4?q=80&w=735&auto=format&fit=crop',
      features: [
        { text: 'Computadora ', bold: 'SEMI NUEVA', highlightClass: '' },
        { text: 'Cajón de dinero ', bold: 'NUEVO', highlightClass: 'highlight-blue' },
        { text: 'Impresora térmica 58 mm ', bold: 'NUEVO', highlightClass: 'highlight-blue' },
        { text: 'Sistema Soft Restaurant', bold: '', highlightClass: '' },
        { text: 'Capacitación y configuración', bold: '', highlightClass: '' },
        { text: 'Garantía de 6 meses', bold: '', highlightClass: '' }
      ],
      link: 'https://wa.me/521111111111?text=Hola,%20me%20interesa%20el%20Paquete%201%20Soft%20Restaurant'
    },
    {
      id: 'paquete-2',
      titulo: 'Soft Restaurant Touch',
      precio: '$7,500',
      badge: 'Paquete #2',
      badgeColor: 'yellow',
      isPremium: true,
      imagen: 'https://images.unsplash.com/photo-1778791672994-34708641cb9d?q=80&w=1074&auto=format&fit=crop',
      features: [
        { text: 'Computadora con ', bold: 'Monitor Touch SEMI NUEVA', highlightClass: 'highlight-indigo' },
        { text: 'Cajón de dinero ', bold: 'NUEVO', highlightClass: 'highlight-blue' },
        { text: 'Impresora de ticket ', bold: 'NUEVO', highlightClass: 'highlight-blue' },
        { text: 'Sistema Soft Restaurant', bold: '', highlightClass: '' },
        { text: 'Capacitación y configuración', bold: '', highlightClass: '' },
        { text: 'Garantía de 6 meses', bold: '', highlightClass: '' }
      ],
      link: 'https://wa.me/522222222222?text=Hola,%20me%20interesa%20el%20Paquete%202%20Soft%20Restaurant%20Touch'
    }
  ];
}