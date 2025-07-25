import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                <ShoppingBag className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Shop Now</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              The most powerful ecommerce platform to build, manage, and scale
              your online business.
            </p>
            <div className="flex flex-wrap space-x-4 md:w-[90%] ">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-black"
              >
                <Link href={"https://x.com/b2yinfy"}>Twitter</Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-black"
              >
                <Link href={"https://www.linkedin.com/company/b2yinfy/"}>
                  LinkedIn
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-black"
              >
                <Link href={"https://www.youtube.com/watch?v=OSG3sdSiOi8"}>
                  YouTube
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-black"
              >
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=61556235036174"
                  }
                >
                  Facebook
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-black"
              >
                <Link href={"https://www.instagram.com/b2yinfy/%22"}>
                  Instagram
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-black"
              >
                <Link
                  href={
                    "https://www.whatsapp.com/channel/0029VaZpddKF1YlQjvFsbH2A"
                  }
                >
                  WhatsApp
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/features"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  IT consulting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cybersecurity
                </a>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Digital Transformation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 hover:text-white transition-colors">
              301/302, 3rd Floor, Saket Callipolis, Sarjapur - Marathalli Road,
              Doddakannelli, Bengaluru, Karnataka- 560035
            </p>
            <div className="mt-6">
              <p className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                <FaLocationDot /> (+91) 7989739209
              </p>
              <p className="mt-1 flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                {" "}
                <MdEmail /> info@b2yinfy.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Shop Now. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
