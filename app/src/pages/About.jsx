import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/o6Vhmn4PfrP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function About() {
  return (
    <>
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About
              <span className="text-indigo-500"> &lt;</span>Vault
              <span className="text-indigo-500"> /&gt;</span>
            </h2>
            <br />
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Vault is a powerful password strength tester and
              generator that helps you create strong, secure
              passwords. With Vault, you can easily test the strength
              of your existing passwords and generate new ones that
              are virtually unbreakable.
            </p>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              It uses latest NIST guidelines along with the "zxcvbn"
              library and provides clear, actionable feedback on
              password strength. Additionally, we offer a method to
              generate strong passwords according to industry
              standards.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
