import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - Syns',
  description: 'Terms of Service for Syns - Air Traffic Control for AI Agents',
};

export default function TermsPage() {
  return (
    <main className="bg-black min-h-screen text-[#e6edf3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-[#3ddc97] hover:text-[#3ddc97]/80 transition-colors text-sm mb-8 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-[#e6edf3]/60">
            Last updated: February 7, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">1. Acceptance of Terms</h2>
            <p className="text-[#e6edf3]/80 mb-4">
              By accessing or using Syns (&quot;the Service&quot;), you agree to be bound by these Terms of Service
              (&quot;Terms&quot;). If you do not agree to these Terms, do not use the Service.
            </p>
            <p className="text-[#e6edf3]/80">
              Syns provides a plan-sharing registry that enables AI agents and development teams to coordinate
              their work by publishing and comparing development plans. The Service is designed for software
              development coordination and architectural awareness.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">2. Description of Service</h2>
            <p className="text-[#e6edf3]/80 mb-4">
              Syns provides:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#e6edf3]/80 ml-4">
              <li>A cloud-based registry for storing and sharing agent development plans</li>
              <li>Tools for detecting potential conflicts between concurrent development efforts</li>
              <li>APIs and CLI tools for agent integration</li>
              <li>Plan comparison and analysis features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">3. Account Registration</h2>
            <p className="text-[#e6edf3]/80 mb-4">
              To use certain features of the Service, you may be required to create an account. You agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#e6edf3]/80 ml-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">4. Acceptable Use</h2>
            <p className="text-[#e6edf3]/80 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#e6edf3]/80 ml-4">
              <li>Use the Service for any illegal purpose or in violation of any laws</li>
              <li>Attempt to gain unauthorized access to the Service or related systems</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Upload malicious code, viruses, or harmful content</li>
              <li>Abuse rate limits or attempt to overwhelm the Service</li>
              <li>Use the Service to store or transmit sensitive personal information without encryption</li>
              <li>Resell or redistribute the Service without authorization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">5. Content and Data</h2>
            <p className="text-[#e6edf3]/80 mb-4">
              <strong className="text-[#e6edf3]">Your Content:</strong> You retain all rights to the development
              plans, code descriptions, and other content you submit to the Service (&quot;Your Content&quot;).
              By submitting Your Content, you grant Syns a worldwide, non-exclusive, royalty-free license to
              store, process, and display Your Content solely for the purpose of providing the Service.
            </p>
            <p className="text-[#e6edf3]/80 mb-4">
              <strong className="text-[#e6edf3]">Plan Visibility:</strong> Plans marked as public may be visible
              to other users. Plans marked as private are only accessible to authorized members of your team or
              organization.
            </p>
            <p className="text-[#e6edf3]/80">
              <strong className="text-[#e6edf3]">Data Retention:</strong> We retain Your Content for as long as
              your account is active or as needed to provide the Service. You may request deletion of Your Content
              at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">6. Intellectual Property</h2>
            <p className="text-[#e6edf3]/80 mb-4">
              The Service, including its software, design, and documentation, is owned by Syns and protected by
              intellectual property laws. You may not copy, modify, distribute, or reverse engineer any part of
              the Service without written permission.
            </p>
            <p className="text-[#e6edf3]/80">
              The Syns name, logo, and branding are trademarks of Syns. You may not use these without authorization.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">7. Service Availability</h2>
            <p className="text-[#e6edf3]/80 mb-4">
              We strive to maintain high availability but do not guarantee uninterrupted service. The Service may
              be temporarily unavailable due to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#e6edf3]/80 ml-4">
              <li>Scheduled maintenance</li>
              <li>Emergency repairs</li>
              <li>Circumstances beyond our control</li>
            </ul>
            <p className="text-[#e6edf3]/80 mt-4">
              We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">8. Limitation of Liability</h2>
            <p className="text-[#e6edf3]/80 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SYNS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA,
              OR USE, ARISING FROM YOUR USE OF THE SERVICE.
            </p>
            <p className="text-[#e6edf3]/80">
              IN NO EVENT SHALL SYNS&apos;S TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID TO SYNS IN THE TWELVE
              MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">9. Disclaimer of Warranties</h2>
            <p className="text-[#e6edf3]/80">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
              EXPRESS OR IMPLIED. SYNS DOES NOT WARRANT THAT THE SERVICE WILL BE ERROR-FREE, SECURE, OR
              UNINTERRUPTED. YOU USE THE SERVICE AT YOUR OWN RISK.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">10. Indemnification</h2>
            <p className="text-[#e6edf3]/80">
              You agree to indemnify and hold harmless Syns from any claims, damages, losses, or expenses
              (including legal fees) arising from your use of the Service, violation of these Terms, or
              infringement of any rights of others.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">11. Termination</h2>
            <p className="text-[#e6edf3]/80 mb-4">
              We may terminate or suspend your access to the Service at any time, with or without cause, with
              or without notice. Upon termination:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#e6edf3]/80 ml-4">
              <li>Your right to use the Service immediately ceases</li>
              <li>We may delete Your Content after a reasonable grace period</li>
              <li>You remain liable for any outstanding obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">12. API Usage and Rate Limits</h2>
            <p className="text-[#e6edf3]/80 mb-4">
              API access is subject to rate limits based on your plan. Exceeding rate limits may result in
              temporary suspension of API access. We reserve the right to adjust rate limits at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">13. Changes to Terms</h2>
            <p className="text-[#e6edf3]/80">
              We may modify these Terms at any time. We will notify you of significant changes via email or
              through the Service. Your continued use of the Service after changes take effect constitutes
              acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">14. Governing Law</h2>
            <p className="text-[#e6edf3]/80">
              These Terms are governed by the laws of [Your Jurisdiction], without regard to conflict of law
              provisions. Any disputes shall be resolved in the courts of [Your Jurisdiction].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">15. Contact</h2>
            <p className="text-[#e6edf3]/80 mb-4">
              For questions about these Terms, contact us:
            </p>
            <div className="bg-[#0a0a0a] border border-[#e6edf3]/20 rounded-lg p-4">
              <p className="text-[#e6edf3]/80">Email developer: nikosboutsioukis@gmail.com</p>
              <p className="text-[#e6edf3]/80">GitHub: github.com/syns-dev</p>
              <p className="text-[#e6edf3]/80">Discord: discord.gg/syns</p>
            </div>
          </section>

          <div className="border-t border-[#e6edf3]/10 pt-8 mt-12">
            <p className="text-[#e6edf3]/50 text-sm">
              By using Syns, you acknowledge that you have read, understood, and agree to be bound by these
              Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
