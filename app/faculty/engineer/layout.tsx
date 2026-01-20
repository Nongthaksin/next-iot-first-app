export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            <h1 className="text-center text-green-600 font-bold">
                Wow wow wow
            </h1>
            {children}
            <h1 className="text-center text-green-600 font-bold">
                Wee wee wee
            </h1>
        </section>
    );
}