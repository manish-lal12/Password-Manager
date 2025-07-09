/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OwPih6zeBDf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Manager() {
    const [form,setForm] = useState({site:"",username:"",password:""})

    const savePassword = () => {

    }

    const handleChange = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }
  return (
    <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 flex flex-col items-center">
          <div className="grid gap-8 max-w-[600px]">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Manage Your Logins</h2>
                <p className="text-muted-foreground md:text-xl">
                  Store and edit your usernames, websites, and passwords securely.
                </p>
              </div>
                <div className="grid gap-3">
                  <Label htmlFor="website" className="text-base">
                    Website
                  </Label>
                  <Input
                    value = {form.site}
                    onChange = {handleChange}
                    name = "site"
                    id="website"
                    type="text"
                    placeholder="Enter the website"
                    className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="username" className="text-base">
                    Username
                  </Label>
                  <Input
                    value = {form.username}
                    onChange = {handleChange}
                    name = "username"
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="password" className="text-base">
                    Password
                  </Label>
                  <Input
                    value = {form.password}
                    onChange = {handleChange}
                    name = "password"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="flex gap-3">
                  <Button onclick={savePassword}
                    variant="outline"
                    className="flex-1 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted focus:outline-none focus:ring-1 focus:ring-ring"
                  >
                    Save
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted focus:outline-none focus:ring-1 focus:ring-ring"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 flex flex-col items-center">
          <div className="grid gap-8 max-w-[600px]">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Your Saved Logins</h2>
                <p className="text-muted-foreground md:text-xl">
                  View and manage all your saved usernames, websites, and passwords.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center justify-between rounded-md bg-card p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <LockIcon className="h-5 w-5 text-card-foreground" />
                    <div>
                      <div className="font-medium text-card-foreground">example@email.com</div>
                      <div className="text-xs text-muted-foreground">Website: example.com</div>
                      <div className="text-xs text-muted-foreground">Password: ********</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full text-card-foreground hover:bg-card-foreground/10"
                    >
                      <FilePenIcon className="h-5 w-5" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full text-card-foreground hover:bg-card-foreground/10"
                    >
                      <TrashIcon className="h-5 w-5" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-md bg-card p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <LockIcon className="h-5 w-5 text-card-foreground" />
                    <div>
                      <div className="font-medium text-card-foreground">myaccount.com</div>
                      <div className="text-xs text-muted-foreground">Website: myaccount.com</div>
                      <div className="text-xs text-muted-foreground">Password: ********</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full text-card-foreground hover:bg-card-foreground/10"
                    >
                      <FilePenIcon className="h-5 w-5" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full text-card-foreground hover:bg-card-foreground/10"
                    >
                      <TrashIcon className="h-5 w-5" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FilePenIcon(props) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
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
  )
}


function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}