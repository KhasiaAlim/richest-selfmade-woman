import '../App.css';

export default function Header() {
  return (
    <div style={{
      padding: '10px'
    }}>
      <span style={{
        fontFamily: 'sans-serif', display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '50px', backgroundColor: "#dc0000", color: "#ffffff", padding: '10px', paddingLeft: '25px', paddingRight: '25px', margin: '0 auto', fontWeight: 700, marginTop: '20px'
      }}>2024</span><br />
      <div style={{ display: 'block', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "Playfair Display", fontSize: '400%', fontWeight: 200, marginBottom: '0px', marginTop: '20px' }}>America’s Richest<br />Self-Made Women</h1>
        <h3 style={{ fontFamily: 'system-ui', fontWeight: 500 }}>Forbes’ Ranking Of The Country’s Most Successful<br />Women Entrepreneurs, Executives And Entertainers</h3>
        <div style={{ fontFamily: 'system-ui', fontWeight: 600, fontSize: '12px', display: 'flex', maxWidth: '950px', margin: '32px auto', border: '1px solid #ffffff ', borderRightStyle: 'none', borderLeftStyle: 'none', padding: '16px 0' }}>
          <p>EDITED BY KERRY A. DOLAN AND ANDREA MURPHY</p>
          <p style={{ marginLeft: 'auto' }}>MAY 28, 2024</p>
        </div>
        <img src='./images/main-image.png' height={'auto'} width={'100%'} style={{ maxWidth: '100%' }}></img>
        <p style={{ color: '#737373', fontFamily: 'system-ui', fontSize: '10px', marginLeft: '16px', textTransform: 'uppercase' }}>Mary Callahan Erdoes, Fawn Weaver, Taylor Swift. Photos by Jamel Toppin for Forbes; Jamel Toppin for Forbes; Neilson Barnard/Getty Images</p>
        <div>
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <img src='./images/text.png' height={50} style={{ margin: '0 auto', marginTop: '20px' }}></img><br />
            <p id='content' style={{ textAlign: 'left', lineHeight: 1.6, fontSize: '20px' }}>Pizza. Packaging. Pop music. The country’s most successful women have found dozens of ways to prosper. It was a record-breaking year for these queens of capitalism, as their combined fortunes soared by nearly one-fourth, to $154 billion. There are now a record 31 self-made women billionaires, up from 24 a year ago. Among the 11 newcomers: singer Katy Perry and Uncle Nearest whiskey cofounder Fawn Weaver. The minimum to qualify rose to $300 million from $225 million last year, the highest since Forbes started tracking the top 100 in 2020.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
