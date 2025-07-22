import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export default function MoonLARP() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white p-4">
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold mb-4">$MoonLARP 🌕🧙‍♂️</h1>
        <p className="text-xl mb-6 max-w-xl mx-auto">
          The most magical memecoin on Solana. LARP hard. Meme harder. Moon responsibly.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild variant="default">
            <a href="https://pump.fun/4zZV6DX6oq5tniP8gAe2y5vEUZHF3h2LdiBAggs4Qt6z" target="_blank">
              Buy on Pump.fun
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://t.me/+fHrkyK7Gk8FkODkx" target="_blank">
              Join Telegram
            </a>
          </Button>
        </div>
      </section>

      <section className="text-center py-10 bg-purple-800 rounded-2xl max-w-4xl mx-auto mt-10">
        <h2 className="text-3xl font-semibold mb-4">What is $MoonLARP?</h2>
        <p className="max-w-2xl mx-auto text-lg">
          $MoonLARP is a Solana-based meme token created by degens, for degens. Born on Pump.fun, it’s a tribute to those who LARP their way to financial freedom. No utility. Just vibes.🪄
        </p>
      </section>

      <section className="py-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Tokenomics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold">🧮 Total Supply</h3>
              <p className="text-lg mt-2">1,000,000,000 $MOONLARP</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold">🔐 LP Status</h3>
              <p className="text-lg mt-2">LP is locked via Pump.fun</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold">💸 Taxes</h3>
              <p className="text-lg mt-2">0% Buy / 0% Sell</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Links</h2>
        <ul className="space-y-4 text-center">
          <li>
            📊 <a href="https://pump.fun/4zZV6DX6oq5tniP8gAe2y5vEUZHF3h2LdiBAggs4Qt6z" className="underline text-blue-300" target="_blank">Chart on Pump.fun</a>
          </li>
          <li>
            🗣️ <a href="https://t.me/+fHrkyK7Gk8FkODkx" className="underline text-blue-300" target="_blank">Join Telegram</a>
          </li>
          <li>
            🧙‍♂️ <a href="https://x.com/moonlarp?t=MPGCA8XsUUVGx0QMWzPmGA&s=09" className="underline text-blue-300" target="_blank">Follow us on X</a>
          </li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-400 py-6">
        $MoonLARP is for entertainment only. Not financial advice. Always LARP responsibly.
      </footer>
    </main>
  );
}
