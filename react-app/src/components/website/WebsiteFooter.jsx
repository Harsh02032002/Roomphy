import React from "react";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Roomhy", href: "/website/about" },
      { label: "Contact", href: "/website/contact" }
    ]
  },
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/website/index" },
      { label: "Our Properties", href: "/website/ourproperty" },
      { label: "Fast Bidding", href: "/website/fast-bidding" },
      { label: "Post Property", href: "/website/list" }
    ]
  },
  {
    title: "Support",
    links: [
      { label: "My Stays", href: "/website/mystays" },
      { label: "Refund Request", href: "/website/refund-request" },
      { label: "Cancellation", href: "/website/cancellation" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/website/terms" },
      { label: "Privacy Policy", href: "/website/privacy" },
      { label: "Refund Policy", href: "/website/refund" }
    ]
  }
];

export default function WebsiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <a href="/website/index" className="inline-flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dpwgvcibj/image/upload/v1768990260/roomhy/website/logoroomhy.png"
                alt="Roomhy"
                className="h-10 w-auto"
              />
            </a>
            <p className="mt-4 text-sm text-gray-600 max-w-sm">
              Find student housing smarter, simpler, and broker-free.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
              <a className="text-gray-600 hover:text-blue-600" href="/website/contact">
                Help & Support
              </a>
              <span className="text-gray-300">•</span>
              <a className="text-gray-600 hover:text-blue-600" href="mailto:hello@roomhy.com">
                hello@roomhy.com
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-gray-600">
              <a href="#" title="Facebook" className="hover:text-blue-600" aria-label="Facebook">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" title="X" className="hover:text-blue-600" aria-label="X">
                <i className="fab fa-x-twitter" />
              </a>
              <a href="#" title="Instagram" className="hover:text-blue-600" aria-label="Instagram">
                <i className="fab fa-instagram" />
              </a>
              <a href="#" title="LinkedIn" className="hover:text-blue-600" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="#" title="YouTube" className="hover:text-blue-600" aria-label="YouTube">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {footerColumns.map((col) => (
                <div key={col.title}>
                  <div className="text-sm font-semibold text-gray-900">{col.title}</div>
                  <ul className="mt-4 space-y-2">
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <a className="text-sm text-gray-600 hover:text-blue-600" href={l.href}>
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="text-xs text-gray-500">© {year} Roomhy. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a className="text-gray-500 hover:text-blue-600" href="/website/terms">
              Terms
            </a>
            <a className="text-gray-500 hover:text-blue-600" href="/website/privacy">
              Privacy
            </a>
            <a className="text-gray-500 hover:text-blue-600" href="/website/refund">
              Refund
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

