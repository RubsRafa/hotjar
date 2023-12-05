import { getContentfulData } from './getContentfulData';
import { FAQSection } from './components/FAQSection';

export default async function Home() {
  const promises = [
    getContentfulData('categorias'),
  ]
  const [categorias] = await Promise.all(promises)


  return (
    <main>
      <FAQSection categorias={categorias.entries} />
    </main>
  )
}
