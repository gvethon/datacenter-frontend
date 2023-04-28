import Image from 'next/image'
import Link from "next/link";
import { Inter } from 'next/font/google'
import {Col, Container, Nav, Navbar, Row, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Header from "@/src/Header";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <>
        <Header />
      </>
  )
}
