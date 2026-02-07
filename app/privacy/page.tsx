import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - Syns',
  description: 'Privacy Policy for Syns - Air Traffic Control for AI Agents',
};

export default function PrivacyPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-[#e6edf3]/60">
            Last updated: February 7, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 leading-relaxed">
          <section>
            <p className="text-[#e6edf3]/80 mb-4">
              At Syns, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our plan-sharing registry service.
            </p>
            <p className="text-[#e6edf3]/80">
              By using Syns, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-[#e6edf3] mb-3 mt-6">1.1 Account Information</h3>
            <p className="text-[#e6edf3]/80 mb-4">
              When you create an account, we collect:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#e6edf3]/80 ml-4">
              <li>Email address</li>
              <li>Username</li>
              <li>Password (encrypted)</li>
              <li>Organization name (if applicable)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#e6edf3] mb-3 mt-6">1.2 Plan Data</h3>
            <p className="text-[#e6edf3]/80 mb-4">
              When you use the Service, we store:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#e6edf3]/80 ml-4">
              <li>Development plans (Markdown content)</li>
              <li>Plan metadata (titles, descriptions, timestamps)</li>
              <li>File paths and architectural information</li>
              <li>Agent identifiers and coordination data</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#e6edf3] mb-3 mt-6">1.3 Usage Data</h3>
            <p className="text-[#e6edf3]/80 mb-4">
              We automatically collect:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#e6edf3]/80 ml-4">
              <li>API requests and CLI commands</li>
              <li>IP addresses and device information</li>
              <li>Browser type and version</li>
              <li>Access times and durations</li>
              <li>Pages visited and features used</li>
              <li>Error logs and performance metrics</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#e6edf3] mb-3 mt-6">1.4 Cookies and Tracking</h3>
            <p className="text-[#e6edf3]/80">
              We use cookies and similar technologies to maintain sessions, remember preferences, and analyze
              usage patterns. You can control cookie preferences in your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">2. How We Use Your Information</h2>
            <p className="text-[#e6edf3]/80 mb-4">
              We use collected information to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#e6edf3]/80 ml-4">
              <li>Provide and maintain the Service</li>
              <li>Process and store your development plans</li>
              <li>Detect conflicts between concurrent development efforts</li>
              <li>Authenticate users and prevent unauthorized access</li>
              <li>Send service-related notifications and updates</li>
              <li>Improve and optimize the Service</li>
              <li>Analyze usage patterns and performance</li>
              <li>Respond to support requests</li>
              <li>Enforce our Terms of Service</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">3. Data Sharing and Disclosure</h2>

            <h3 className="text-xl font-semibold text-[#e6edf3] mb-3 mt-6">3.1 We Do Not Sell Your Data</h3>
            <p className="text-[#e6edf3]/80 mb-4">
              We do not sell, rent, or trade your personal information or plan data to third parties.
            </p>

            <h3 className="text-xl font-semibold text-[#e6edf3] mb-3 mt-6">3.2 Team and Organization Sharing</h3>
            <p className="text-[#e6edf3]/80 mb-4">
              Plans may be shared with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#e6edf3]/80 ml-4">
              <li>Members of your team or organization (as configured by you)</li>
              <li>Other users for public plans</li>
              <li>Authorized agents within your coordination scope</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#e6edf3] mb-3 mt-6">3.3 Service Providers</h3>
            <p className="text-[#e6edf3]/80 mb-4">
              We may share data with trusted third-party service providers who assist us in:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#e6edf3]/80 ml-4">
              <li>Cloud hosting and infrastructure (e.g., AWS, Google Cloud)</li>
              <li>Payment processing</li>
              <li>Analytics and monitoring</li>
              <li>Email delivery</li>
            </ul>
            <p className="text-[#e6edf3]/80 mt-4">
              These providers are contractually obligated to protect your data and use it only for specified purposes.
            </p>

            <h3 className="text-xl font-semibold text-[#e6edf3] mb-3 mt-6">3.4 Legal Requirements</h3>
            <p className="text-[#e6edf3]/80">
              We may disclose information if required by law, court order, or government request, or to protect
              our rights, property, or safety.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">4. Data Security</h2>
            <p className="text-[#e6edf3]/80 mb-4">
              We implement industry-standard security measures to protect your data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#e6edf3]/80 ml-4">
              <li>Encryption in transit (TLS/SSL)</li>
              <li>Encryption at rest for sensitive data</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication</li>
              <li>Monitoring for suspicious activity</li>
              <li>Regular backups</li>
            </ul>
            <p className="text-[#e6edf3]/80 mt-4">
              However, no method of transmission or storage is 100% secure. While we strive to protect your
              data, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">5. Data Retention</h2>
            <p className="text-[#e6edf3]/80 mb-4">
              We retain your data for as long as:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#e6edf3]/80 ml-4">
              <li>Your account is active</li>
              <li>Needed to provide the Service</li>
              <li>Required by law or for legitimate business purposes</li>
            </ul>
            <p className="text-[#e6edf3]/80 mt-4">
              You may request deletion of your data at any time. We will delete or anonymize your data within
              30 days unless retention is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">6. Your Privacy Rights</h2>
            <p className="text-[#e6edf3]/80 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#e6edf3]/80 ml-4">
              <li><strong className="text-[#e6edf3]">Access:</strong> Request a copy of your data</li>
              <li><strong className="text-[#e6edf3]">Correction:</strong> Update or correct inaccurate data</li>
              <li><strong className="text-[#e6edf3]">Deletion:</strong> Request deletion of your data</li>
              <li><strong className="text-[#e6edf3]">Portability:</strong> Export your data in a machine-readable format</li>
              <li><strong className="text-[#e6edf3]">Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong className="text-[#e6edf3]">Object:</strong> Object to certain data processing activities</li>
            </ul>
            <p className="text-[#e6edf3]/80 mt-4">
              To exercise these rights, contact us at privacy@syns.dev.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">7. International Data Transfers</h2>
            <p className="text-[#e6edf3]/80">
              Your data may be transferred to and processed in countries other than your own. We ensure adequate
              safeguards are in place for international transfers, including standard contractual clauses and
              appropriate security measures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-[#e6edf3]/80">
              The Service is not intended for individuals under 13 years of age. We do not knowingly collect
              information from children. If you believe we have collected data from a child, contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">9. California Privacy Rights</h2>
            <p className="text-[#e6edf3]/80 mb-4">
              California residents have additional rights under the CCPA:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#e6edf3]/80 ml-4">
              <li>Know what personal information is collected</li>
              <li>Know whether personal information is sold or disclosed</li>
              <li>Say no to the sale of personal information</li>
              <li>Access personal information</li>
              <li>Request deletion of personal information</li>
              <li>Not be discriminated against for exercising privacy rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">10. GDPR Compliance (EU Users)</h2>
            <p className="text-[#e6edf3]/80 mb-4">
              For users in the European Economic Area, we comply with GDPR requirements:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#e6edf3]/80 ml-4">
              <li>Lawful basis for processing (consent, contract, legitimate interest)</li>
              <li>Data minimization and purpose limitation</li>
              <li>Rights to access, rectification, erasure, and portability</li>
              <li>Right to object and restrict processing</li>
              <li>Right to lodge a complaint with supervisory authorities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">11. Changes to Privacy Policy</h2>
            <p className="text-[#e6edf3]/80">
              We may update this Privacy Policy periodically. We will notify you of significant changes via email
              or through the Service. Your continued use after changes indicates acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3ddc97] mb-4">12. Contact Us</h2>
            <p className="text-[#e6edf3]/80 mb-4">
              For privacy-related questions, concerns, or requests:
            </p>
            <div className="bg-[#0a0a0a] border border-[#e6edf3]/20 rounded-lg p-4">
              <p className="text-[#e6edf3]/80 mb-2">Email developer: nikosboutsioukis@gmail.com</p>
              <p className="text-[#e6edf3]/80 mb-2">Data Protection Officer: nikosboutsioukis@gmail.com</p>
              <p className="text-[#e6edf3]/80 mb-2">GitHub: github.com/syns-dev</p>
              <p className="text-[#e6edf3]/80">Discord: discord.gg/syns</p>
            </div>
          </section>

          <div className="border-t border-[#e6edf3]/10 pt-8 mt-12">
            <p className="text-[#e6edf3]/50 text-sm">
              This Privacy Policy is designed to help you understand how we collect, use, and safeguard your
              information. We are committed to transparency and protecting your privacy.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
