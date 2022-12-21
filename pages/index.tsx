import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { TransactionProvider } from "../context/TransactionContext";

export default function Home() {
  return (
    <TransactionProvider>
      <div className="bg-gray-100">
        <Header />
        <main>
          <Main />
        </main>
      </div>
    </TransactionProvider>
  );
}
