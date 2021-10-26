import { useState } from 'react';
import Link from 'next/link';
import {
  Icon,
  IconChevronRight,
  IconNotStarted,
  IconWidgets,
  IconDeviceHub,
  SearchField,
  View,
  Heading,
} from '@aws-amplify/ui-react';
import { useRouter } from 'next/router';

const NavLink = ({ href, children }) => {
  const router = useRouter();
  const isCurrent = router.pathname === href;

  return (
    <Link href={href}>
      <a className={`aui-docs-nav-link ${isCurrent ? 'current' : ''}`}>
        {children}
      </a>
    </Link>
  );
};

export const ComponentsSidebar = () => {
  return (
    <aside className="docs-sidebar">
      <div className="docs-sidebar-inner">
        <nav className="docs-sidebar-nav">
          <Heading level={6}>Connected Components</Heading>
          <NavLink href="/components/authenticator">Authenticator</NavLink>
          <NavLink href="/components/chatbot">Chatbot</NavLink>
          <NavLink href="/components/chatbot">S3 Album</NavLink>

          <Heading level={6}>Base</Heading>
          <NavLink href="/components/view">View</NavLink>
          <NavLink href="/components/text">Text</NavLink>
          <NavLink href="/components/heading">Heading</NavLink>
          <NavLink href="/components/link">Link</NavLink>
          <NavLink href="/components/image">Image</NavLink>
          <NavLink href="/components/divider">Divider</NavLink>
          <NavLink href="/components/icon">Icon</NavLink>

          <Heading level={6}>Inputs</Heading>
          <NavLink href="/components/textfield">Text Field</NavLink>
          <NavLink href="/components/selectfield">Select Field</NavLink>
          <NavLink href="/components/stepperField">Stepper Field</NavLink>
          <NavLink href="/components/searchfield">Search Field</NavLink>
          <NavLink href="/components/passwordfield">Password Field</NavLink>
          <NavLink href="/components/phonenumberfield">
            Phone Number Field
          </NavLink>
          <NavLink href="/components/switchfield">Switch Field</NavLink>
          <NavLink href="/components/radiogroupfield">
            Radio Group Field
          </NavLink>
          <NavLink href="/components/checkboxfield">Checkbox Field</NavLink>
          <NavLink href="/components/togglebutton">Toggle Button</NavLink>
          <NavLink href="/components/button">Button</NavLink>

          <Heading level={6}>Layout</Heading>
          <NavLink href="/components/collection">Collection</NavLink>
          <NavLink href="/components/flex">Flex</NavLink>
          <NavLink href="/components/grid">Grid</NavLink>
          <NavLink href="/components/table">Table</NavLink>

          <Heading level={6}>Feedback</Heading>
          <NavLink href="/components/alert">Alert</NavLink>
          <NavLink href="/components/pagination">Pagination</NavLink>
          <NavLink href="/components/placeholder">Placeholder</NavLink>
          <NavLink href="/components/loader">Loader</NavLink>

          <Heading level={6}>Data Display</Heading>
          <NavLink href="/components/badge">Badge</NavLink>
          <NavLink href="/components/rating">Rating</NavLink>

          <Heading level={6}>Utilities</Heading>
          <NavLink href="/components/visuallyhidden">Visually Hidden</NavLink>
        </nav>
      </div>
    </aside>
  );
};
