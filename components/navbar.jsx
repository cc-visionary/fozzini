"use client";

import { useState } from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import {
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
} from "@nextui-org/dropdown";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Button } from "@nextui-org/button";
import { link as linkStyles } from "@nextui-org/theme";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import clsx from "clsx";

import { ChevronDown } from "@/components/icons";
import { NAVBAR } from "@/data";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { logo, links } = NAVBAR;

  return (
    <div className="bg-primary">
      <NextUINavbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        position="sticky"
        className="bg-primary max-w-7xl mx-auto"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-white sm:hidden"
          />
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <Link
              className="flex justify-start items-center gap-1"
              href={logo.link}
            >
              <Image
                width={200}
                height={75}
                src={logo.src}
                alt={logo.alt}
                className="object-contain transform transition hover:scale-105"
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="end">
          <ul className="hidden lg:flex gap-4 justify-start ml-2">
            {links.map(
              ({ label, link, subcategories }) =>
                label &&
                (subcategories ? (
                  <Dropdown placement="bottom-start" key={link}>
                    <NavbarItem>
                      <DropdownTrigger>
                        <Button
                          disableRipple
                          className={
                            "rounded-none text-white data-[active=true]:text-primary data-[active=true]:font-medium"
                          }
                          endContent={<ChevronDown size={16} />}
                          radius="sm"
                          variant="light"
                        >
                          {label}
                        </Button>
                      </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                      aria-label={`${label} features`}
                      itemClasses={{
                        base: "gap-4",
                      }}
                    >
                      {subcategories.map(({ label, link }) => (
                        <DropdownItem
                          key={link}
                          // description={description}
                          className={
                            "rounded-none data-[active=true]:text-primary data-[active=true]:font-medium"
                          }
                          as={Link}
                          href={link}
                        >
                          {label}
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                ) : (
                  <NavbarItem key={link}>
                    <Button
                      as={Link}
                      className={
                        "text-white rounded-none h-10 data-[active=true]:text-primary data-[active=true]:font-medium"
                      }
                      variant="light"
                      href={link}
                    >
                      {label}
                    </Button>
                  </NavbarItem>
                ))
            )}
          </ul>
          <NavbarItem>
            <Button
              as={Link}
              href="/contact"
              color="primary"
              variant="bordered"
              className="text-white border-white rounded-none"
            >
              Contact Us
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {links.map(
              ({ label, link, subcategories }) =>
                label &&
                (subcategories ? (
                  <Accordion key={link}>
                    <AccordionItem
                      aria-label={`${label} menu`}
                      title={label}
                      classNames={{ title: "text-lg font-bold" }}
                    >
                      <div className="flex flex-col gap-4">
                        {subcategories.map(({ label, link }) => (
                          <Link
                            key={link}
                            className={clsx(
                              linkStyles({ color: "foreground" }),
                              "text-sm flex items-center space-x-2"
                            )}
                            onPress={() => setIsMenuOpen(false)}
                            href={link}
                          >
                            <span>{label}</span>
                          </Link>
                        ))}
                      </div>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <NavbarMenuItem key={link}>
                    <Link
                      className={clsx(
                        linkStyles({ color: "foreground" }),
                        "py-4 px-2 text-lg font-bold"
                      )}
                      onPress={() => setIsMenuOpen(false)}
                      href={link}
                    >
                      {label}
                    </Link>
                  </NavbarMenuItem>
                ))
            )}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </div>
  );
};
