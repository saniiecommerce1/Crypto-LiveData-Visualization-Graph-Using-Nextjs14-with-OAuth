import SearchOne from '@/comp-pages/searchone/SearchOne'


export default function PageSearchOne({params}) {
  return (
<SearchOne id={params.id} />
  );
}