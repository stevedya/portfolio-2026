import { useEffect, useRef } from "react";
import Link from 'next/link'
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

// Mock blog post data - in a real app, this would come from a CMS or API
const posts: Record<string, {
  title: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}> = {
  "1": {
    title: "Building Scalable React Applications",
    date: "December 15, 2024",
    category: "Development",
    readTime: "5 min read",
    content: `
      <p class="lead">Lessons learned from architecting large-scale frontend applications. We'll explore component patterns, state management strategies, and performance optimization techniques that I've found invaluable over years of building production React apps.</p>

      <h2>Component Architecture</h2>
      <p>The foundation of any scalable React application lies in its component architecture. I've found that following a few key principles helps maintain clarity as applications grow.</p>

      <p>One pattern I particularly love is the <strong>compound component pattern</strong>. It allows you to create flexible, declarative APIs for your components while keeping related logic encapsulated.</p>

      <pre><code class="language-tsx">// Compound component pattern example
import { createContext, useContext, useState } from 'react';

const TabsContext = createContext<{
  activeTab: string;
  setActiveTab: (id: string) => void;
} | null>(null);

export function Tabs({ children, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return (
    &lt;TabsContext.Provider value={{ activeTab, setActiveTab }}&gt;
      &lt;div className="tabs-container"&gt;
        {children}
      &lt;/div&gt;
    &lt;/TabsContext.Provider&gt;
  );
}

export function TabList({ children }: { children: React.ReactNode }) {
  return &lt;div className="tab-list" role="tablist"&gt;{children}&lt;/div&gt;;
}

export function Tab({ id, children }: TabProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('Tab must be used within Tabs');
  
  return (
    &lt;button
      role="tab"
      aria-selected={context.activeTab === id}
      onClick={() => context.setActiveTab(id)}
      className={context.activeTab === id ? 'active' : ''}
    &gt;
      {children}
    &lt;/button&gt;
  );
}</code></pre>

      <h2>State Management Strategies</h2>
      <p>When it comes to state management, I've learned that the best approach is often the simplest one that meets your needs. Here's my hierarchy of preferences:</p>

      <ol>
        <li><strong>Local state</strong> — Start here. useState and useReducer handle most cases.</li>
        <li><strong>Context</strong> — For state that needs to be shared across a subtree.</li>
        <li><strong>Server state libraries</strong> — TanStack Query for API data.</li>
        <li><strong>Global state</strong> — Zustand or Jotai when you truly need it.</li>
      </ol>

      <blockquote>
        <p>"The best code is no code at all. Every line of code you write is code that has to be debugged, maintained, and understood."</p>
      </blockquote>

      <h2>Performance Optimization</h2>
      <p>React's reconciliation algorithm is remarkably efficient, but there are patterns that can help you avoid unnecessary re-renders in performance-critical sections.</p>

      <pre><code class="language-typescript">// Memoization patterns
import { memo, useMemo, useCallback } from 'react';

// Memoize expensive computations
const ExpensiveList = memo(function ExpensiveList({ items, filter }: Props) {
  const filteredItems = useMemo(
    () => items.filter(item => item.category === filter),
    [items, filter]
  );

  const handleItemClick = useCallback((id: string) => {
    // Handle click without causing re-renders
    analytics.track('item_clicked', { id });
  }, []);

  return (
    &lt;ul&gt;
      {filteredItems.map(item => (
        &lt;ListItem 
          key={item.id} 
          item={item} 
          onClick={handleItemClick} 
        /&gt;
      ))}
    &lt;/ul&gt;
  );
});</code></pre>

      <h2>File Structure</h2>
      <p>A clear file structure becomes increasingly important as your application grows. Here's the structure I typically use:</p>

      <pre><code class="language-bash">src/
├── components/
│   ├── ui/          # Reusable UI primitives
│   ├── forms/       # Form-specific components
│   └── layouts/     # Layout components
├── features/
│   ├── auth/        # Feature-specific code
│   ├── dashboard/
│   └── settings/
├── hooks/           # Shared custom hooks
├── lib/             # Utilities and helpers
├── pages/           # Route components
└── types/           # TypeScript definitions</code></pre>

      <h2>Conclusion</h2>
      <p>Building scalable React applications is as much about discipline and consistency as it is about choosing the right patterns. Start simple, measure performance, and add complexity only when needed.</p>

      <p>The patterns I've shared here have served me well across many projects, but remember — the best architecture is one that fits your team and your specific requirements.</p>
    `,
  },
  "2": {
    title: "The Art of Landscape Photography",
    date: "December 8, 2024",
    category: "Photography",
    readTime: "4 min read",
    content: `
      <p class="lead">Tips and techniques for capturing stunning natural scenes. From golden hour timing to composition rules that will elevate your outdoor photography.</p>

      <h2>Understanding Light</h2>
      <p>Light is the foundation of all photography, but it's especially crucial in landscape work. The quality, direction, and color of light can transform an ordinary scene into something magical.</p>

      <p>The <strong>golden hour</strong> — that period just after sunrise and before sunset — provides warm, soft light that's flattering for almost any landscape. But don't overlook the <strong>blue hour</strong> either, which offers cool, ethereal tones perfect for moody shots.</p>

      <h2>Composition Techniques</h2>
      <p>While rules are meant to be broken, understanding compositional guidelines helps you make intentional choices about your framing.</p>

      <ul>
        <li><strong>Rule of thirds</strong> — Place key elements along the grid lines</li>
        <li><strong>Leading lines</strong> — Use natural lines to guide the viewer's eye</li>
        <li><strong>Foreground interest</strong> — Include compelling elements in the front</li>
        <li><strong>Frame within a frame</strong> — Use natural elements to frame your subject</li>
      </ul>

      <blockquote>
        <p>"A good photograph is knowing where to stand." — Ansel Adams</p>
      </blockquote>

      <h2>Essential Gear</h2>
      <p>You don't need the most expensive equipment to capture beautiful landscapes, but a few key pieces make a significant difference:</p>

      <ol>
        <li><strong>Sturdy tripod</strong> — Essential for sharp images in low light</li>
        <li><strong>Wide-angle lens</strong> — Captures expansive scenes</li>
        <li><strong>Polarizing filter</strong> — Reduces reflections and enhances skies</li>
        <li><strong>ND filters</strong> — Enable long exposures in bright conditions</li>
      </ol>

      <h2>Patience and Persistence</h2>
      <p>The best landscape photographers I know share one trait: patience. Weather changes, light shifts, and sometimes the shot you envision requires multiple visits to the same location.</p>

      <p>Embrace the process. Some of my favorite images came from unexpected moments when I was ready and waiting.</p>
    `,
  },
  "3": {
    title: "TypeScript Best Practices in 2024",
    date: "November 28, 2024",
    category: "Development",
    readTime: "6 min read",
    content: `
      <p class="lead">Modern patterns and practices for type-safe JavaScript development. Covering utility types, generics, and the latest TypeScript features.</p>

      <h2>Leverage Utility Types</h2>
      <p>TypeScript's built-in utility types are incredibly powerful for transforming existing types. Here are some patterns I use daily:</p>

      <pre><code class="language-typescript">// Common utility type patterns
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: Date;
}

// Make all properties optional for updates
type UserUpdate = Partial&lt;User&gt;;

// Only allow certain fields for creation
type CreateUser = Pick&lt;User, 'name' | 'email' | 'role'&gt;;

// Exclude sensitive fields for public display
type PublicUser = Omit&lt;User, 'email'&gt;;

// Make specific fields required
type RequiredUser = Required&lt;Pick&lt;User, 'id' | 'name'&gt;&gt; & Partial&lt;User&gt;;</code></pre>

      <h2>Generic Patterns</h2>
      <p>Generics enable you to write reusable, type-safe code. Here's a practical example of a generic API response wrapper:</p>

      <pre><code class="language-typescript">// Generic API response wrapper
interface ApiResponse&lt;T&gt; {
  data: T;
  status: number;
  message: string;
}

interface PaginatedResponse&lt;T&gt; extends ApiResponse&lt;T[]&gt; {
  pagination: {
    page: number;
    limit: number;
    total: number;
  };
}

// Usage
async function fetchUsers(): Promise&lt;PaginatedResponse&lt;User&gt;&gt; {
  const response = await fetch('/api/users');
  return response.json();
}</code></pre>

      <h2>Discriminated Unions</h2>
      <p>Discriminated unions are one of TypeScript's most powerful features for modeling state:</p>

      <pre><code class="language-typescript">// Discriminated union for async state
type AsyncState&lt;T&gt; =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

function UserProfile({ state }: { state: AsyncState&lt;User&gt; }) {
  switch (state.status) {
    case 'idle':
      return null;
    case 'loading':
      return &lt;Spinner /&gt;;
    case 'success':
      return &lt;Profile user={state.data} /&gt;; // data is typed!
    case 'error':
      return &lt;Error message={state.error.message} /&gt;;
  }
}</code></pre>

      <h2>Type Inference</h2>
      <p>Let TypeScript do the heavy lifting. Avoid over-annotating when inference provides the correct types:</p>

      <pre><code class="language-typescript">// Let TypeScript infer when possible
const numbers = [1, 2, 3]; // number[] inferred
const doubled = numbers.map(n => n * 2); // number[] inferred

// Use 'as const' for literal types
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
} as const;
// typeof config.apiUrl is 'https://api.example.com', not string</code></pre>

      <h2>Conclusion</h2>
      <p>TypeScript continues to evolve with features that make type-safe development more ergonomic. The key is finding the right balance between type safety and developer productivity.</p>
    `,
  },
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const contentRef = useRef<HTMLDivElement>(null);
  const post = id ? posts[id] : null;

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightElement(block as HTMLElement);
      });
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-20">
          <div className="container-wide py-16 text-center">
            <h1 className="heading-display mb-4">Post Not Found</h1>
            <Link href="/blog" className="link-underline">
              ← Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <article className="py-16 md:py-24">
          <div className="container-wide">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            {/* Header */}
            <header className="max-w-3xl mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-small">{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span className="text-small">{post.readTime}</span>
              </div>
              <h1 className="heading-display mb-6">{post.title}</h1>
              <time className="text-muted-foreground">{post.date}</time>
            </header>

            {/* Content with Tailwind Typography */}
            <div
              ref={contentRef}
              className="prose prose-lg dark:prose-invert max-w-3xl
                prose-headings:font-spectral prose-headings:font-semibold
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                prose-p:text-foreground/90 prose-p:leading-relaxed
                prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground prose-strong:font-semibold
                prose-blockquote:border-l-accent prose-blockquote:bg-muted/50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                prose-code:text-accent prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-border prose-pre:rounded-lg
                prose-li:text-foreground/90
                prose-ol:text-foreground/90
                prose-ul:text-foreground/90
                [&_.lead]:text-xl [&_.lead]:text-foreground/80 [&_.lead]:leading-relaxed [&_.lead]:mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
