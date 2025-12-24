import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  text: string;
  author: string;
  role?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}