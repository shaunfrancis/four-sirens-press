import Image from 'next/image';

export default function ThankYou() {
  return (
    <main>
        <section>
            <div className="split-section">
                <div className="split-section-item">
                    <Image src="/mail.jpg" alt="The Four Sirens Press newsletter being read on a tablet device" width={450} height={270} />
                </div>
                <div className="split-section-item">
                    <h2>Thank You</h2>
                    <p>Thank you for your interest in Four Sirens Press.</p>
                    <p>An email will be sent to your inbox in the next few minutes to confirm your addition to our reader panel. Make sure to check your spam emails if you do not receive it.</p>
                </div>
            </div>
        </section>
    </main>
  )
}