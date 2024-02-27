import * as S from '../src/styles/mainStyle'
import { Anchor } from 'antd';
import { useRouter } from 'next/router';
import Section1 from '../src/components/section1';
import Section2 from '../src/components/section2';
import Section3 from '../src/components/section3';
import Section4 from '../src/components/section4';
import Section5 from '../src/components/section5';

export default function MainPage() {
  const router = useRouter()

  return (
    <div>
      <S.Banner>
        <Anchor style={{
          backgroundColor: 'white',
          padding: '15px',
          fontWeight: 'bold',
          width: '23vw',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 2,
        }}
          direction="horizontal"
          items={[
            {
              key: 'part-1',
              href: '#part-1',
              title: 'Main',
            },
            {
              key: 'part-2',
              href: '#part-2',
              title: 'Caution',
            },
            {
              key: 'part-3',
              href: '#part-3',
              title: 'Function',
            },
            {
              key: 'part-4',
              href: '#part-4',
              title: 'Tech',
            },
            {
              key: 'part-5',
              href: '#part-5',
              title: 'Coworker',
            },
          ]}
        />
      </S.Banner>
      <S.All>
        <Section1 id="part-1" />
        <Section2 id="part-2" />
        <Section3 id="part-3" />
        <Section4 id="part-4" />
        <Section5 id="part-5" />
      </S.All>
    </div>
  );
}