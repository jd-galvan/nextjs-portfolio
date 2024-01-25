import Image from "next/image"
import Link from "next/link"

export const CertificationsWrapper = async () => {
  // const certifications = await getCertifications()
  return (
    <section>
      <Link href='https://www.credly.com/badges/c1b04c11-45ce-4098-8030-e736df90bfcd/public_url' target="blank">
        <Image height={150} width={150} src="/images/certificates/pcap.png" alt='PCAP Certificate' />
      </Link>
      <Link href="https://www.credly.com/badges/3c712ec8-fe13-4d19-91a0-f919ffdeb5dc/public_url" target="blank">
        <Image height={150} width={150} src="/images/certificates/aws-cloud-practitioner.png" alt='AWS Certificate Cloud Practicioner' />
      </Link>
    </section>
  )
}
