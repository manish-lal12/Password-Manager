import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className=" flex flex-col min-h-[100dvh] bg-background min-w-full">
        <div className="w-full bg-indigo-600 py-32 rounded-2xl">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-6xl font-bold text-yellow-400">
                <span>&lt;</span>
                Vault/
                <span>&gt;</span>
              </h1>
              <h2 className="text-5xl font-bold text-primary-foreground">
                Password Strength Tester
              </h2>
              <p className="max-w-[700px] text-primary-foreground text-xl">
                Check the strength of your passwords and improve your
                security.
              </p>
              <Link
                to="/password-tester"
                className=" inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-6 py-4 text-md font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-lime-400"
              >
                Test Password
              </Link>
            </div>
          </div>
        </div>
        <main className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-muted rounded-xl border-2 border-indigo-400 shadow-indigo-xl">
              <CardHeader className="text-indigo-500">
                <CardTitle>Password Manager</CardTitle>
                <CardDescription>
                  Securely store and manage all your passwords in one
                  place.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-start space-y-4">
                  <LockIcon className="h-8 w-8 text-primary" />
                  <p className="text-muted-foreground">
                    Never forget a password again. Our password
                    manager keeps your accounts safe and secure.
                  </p>
                  <Link
                    to="/"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Try it now
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-muted rounded-xl border-2 border-indigo-400 shadow-indigo-xl">
              <CardHeader className="text-indigo-500">
                <CardTitle>Password Generator</CardTitle>
                <CardDescription>
                  Create strong, unique passwords with a single click.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-start space-y-4">
                  <KeyIcon className="h-8 w-8 text-primary" />
                  <p className="text-muted-foreground">
                    Forget about coming up with complex passwords. Our
                    generator creates secure passwords for you.
                  </p>
                  <Link
                    to="/password-generator"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Generate Password
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-muted rounded-xl border-2 border-indigo-400 shadow-indigo-xl">
              <CardHeader>
                <CardTitle className="text-indigo-500">
                  Password Strength Tester
                </CardTitle>
                <CardDescription>
                  Check the strength of your passwords and improve
                  your security.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-start space-y-4">
                  <GaugeIcon className="h-8 w-8 text-primary" />
                  <p className="text-muted-foreground">
                    Ensure your passwords are secure and strong enough
                    to protect your accounts.
                  </p>
                  <Link
                    to="/password-tester"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Test Password
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}

function GaugeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  );
}

function KeyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
      <path d="m21 2-9.6 9.6" />
      <circle cx="7.5" cy="15.5" r="5.5" />
    </svg>
  );
}

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
