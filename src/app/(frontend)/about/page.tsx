import React from 'react'
import Image from 'next/image'

export default async function AboutPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-24">
      <h1 className="text-4xl font-bold mb-8 text-center">ჩვენს შესახებ</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">ვინ ვართ ჩვენ</h2>
          <p className="text-gray-700">
            ჩვენ ვართ ორგანიზაცია, რომელიც მიზნად ისახავს საქართველოში ცვლილებების მოხდენას. ჩვენი
            გუნდი შედგება ენთუზიასტებისგან, რომლებიც მუშაობენ უკეთესი მომავლისთვის.
          </p>
          <h2 className="text-2xl font-semibold">ჩვენი მისია</h2>
          <p className="text-gray-700">
            ჩვენი მისიაა, ხელი შევუწყოთ საზოგადოების განვითარებას, ვიბრძოლოთ სამართლიანობისთვის და
            შევქმნათ უკეთესი გარემო ყველასთვის.
          </p>
        </div>

        <div className="relative h-64 md:h-auto">
          <Image
            src="/path-to-your-image.jpg" // შეცვალეთ რეალური სურათის მისამართით
            alt="ჩვენი გუნდი"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">ჩვენი ღირებულებები</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>გამჭვირვალობა</li>
          <li>თანამშრომლობა</li>
          <li>ინოვაცია</li>
          <li>პასუხისმგებლობა</li>
        </ul>
      </div>
    </div>
  )
}
