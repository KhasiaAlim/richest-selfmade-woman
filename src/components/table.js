import React, { useState } from 'react';
import '../App.css';


const membersData = [
  { rank: 1, name: 'Diane Hendricks', netWorth: 20.9, age: 77, source: 'Building Supplies', state: 'Wisconsin' },
  { rank: 2, name: 'Judy Love & family', netWorth: 11.6, age: 86, source: 'Gas stations', state: 'Oklahoma' },
  { rank: 3, name: 'Judy Faulkner', netWorth: 7.6, age: 80, source: 'Healthcare software', state: 'Wisconsin' },
  { rank: 4, name: 'Thai Lee', netWorth: 6.8, age: 65, source: 'IT provider', state: 'Texas' },
  { rank: 5, name: 'Elizabeth Uihlein', netWorth: 6.7, age: 78, source: 'Packaging materials', state: 'Illinois' },
  { rank: 6, name: 'Lynda Resnick', netWorth: 5.6, age: 81, source: 'Agriculture', state: 'California' },
  { rank: 7, name: 'Marian Ilitch', netWorth: 4.6, age: 91, source: 'Little Caesars Pizza', state: 'Michigan' },
  { rank: 8, name: 'Gail Miller', netWorth: 4.4, age: 80, source: 'Car dealership', state: 'Utah' },
  { rank: 9, name: 'Johnelle Hunt', netWorth: 4.3, age: 92, source: 'Trucking', state: 'Arkansas' },
  { rank: 10, name: 'Eren Ozmen', netWorth: 3.7, age: 65, source: 'Aerospace', state: 'Michigan' },
  { rank: 11, name: 'Jayshree Ullal', netWorth: 3.6, age: 63, source: 'Computer Networking', state: 'California' },
  { rank: 12, name: 'Meg Whitman', netWorth: 3.4, age: 67, source: 'EBay', state: 'California' },
  { rank: 13, name: 'Peggy Cherng', netWorth: 3.1, age: 76, source: 'Fast food', state: 'Nevada' },
  { rank: 14, name: 'Oprah Winfrey', netWorth: 3, age: 70, source: 'TV Shows', state: 'Illinois' },
  { rank: 15, name: 'Barbara Banke & Family', netWorth: 2.6, age: 70, source: 'Wine', state: 'California' },
  { rank: 16, name: 'Elaine Wynn', netWorth: 2.1, age: 82, source: 'Casinos, Hotels', state: 'Nevada' },
  { rank: 16, name: 'Sheryl Sandberg', netWorth: 2.1, age: 54, source: 'Facebook', state: 'California' },
  { rank: 18, name: 'Alice Schwartz', netWorth: 2, age: 97, source: 'Biotech', state: 'California' },
  { rank: 18, name: 'Susan Ocampo & Family', netWorth: 2, age: 66, source: 'Semiconductors', state: 'Hawaii' },
  { rank: 20, name: 'Safra Catz', netWorth: 1.9, age: 62, source: 'Software', state: 'Florida' },
  { rank: 21, name: 'Kim Kardashian', netWorth: 1.7, age: 43, source: 'Shapewear, skincare', state: 'California' },
  { rank: 22, name: 'Doris Fisher', netWorth: 1.5, age: 92, source: 'Gap', state: 'California' },
  { rank: 23, name: 'Rihanna', netWorth: 1.4, age: 36, source: 'Music, Cosmetics', state: 'California' },
  { rank: 24, name: 'Taylor Swift', netWorth: 1.3, age: 34, source: 'Music', state: 'Tennessee' },
  { rank: 24, name: 'Weili Dai', netWorth: 1.3, age: 62, source: 'Semiconductors', state: 'Nevada' },
  { rank: 24, name: 'Sara Blakely', netWorth: 1.3, age: 53, source: 'Spanx', state: 'Georgia' },
  { rank: 27, name: 'Sheila Johnson', netWorth: 1, age: 75, source: 'Cable TV, Hotels', state: 'Virgina' },
  { rank: 27, name: 'Sara Liu', netWorth: 1, age: 62, source: 'Computer Hardware', state: 'California' },
  { rank: 27, name: 'Michelle Zatyln', netWorth: 1, age: 44, source: 'Cybersecurity', state: 'California' },
  { rank: 27, name: 'Neerja Sethi', netWorth: 1, age: 69, source: 'IT Consulting', state: 'Florida' },
  { rank: 27, name: 'Lisa Su', netWorth: 1, age: 54, source: 'Semiconductors', state: 'Texas' },
  { rank: 32, name: 'Theresia Gouw', netWorth: 980, age: 56, source: 'Venture capital', state: 'California' },
  { rank: 33, name: 'Marissa Mayer', netWorth: 970, age: 48, source: 'Google, Yahoo', state: 'California' },
  { rank: 34, name: 'Tory Burch', netWorth: 940, age: 57, source: 'Fashion', state: 'New York' },
  { rank: 34, name: 'Anne Dinning', netWorth: 940, age: 61, source: 'Hedge Funds', state: 'New York' },
  { rank: 36, name: 'Anastasia Soare', netWorth: 900, age: 66, source: 'Cosmetics', state: 'California' },
  { rank: 36, name: 'Gwynne Shotwell', netWorth: 900, age: 60, source: 'SpaceX', state: 'Texas' },
  { rank: 38, name: 'Robyn Jones', netWorth: 860, age: 61, source: 'Insurance', state: 'Texas' },
  { rank: 39, name: 'Shuo Wang', netWorth: 850, age: 35, source: 'HR Software', state: 'Washington' },
  { rank: 39, name: 'Madonna', netWorth: 850, age: 65, source: 'Music', state: 'New York' },
  { rank: 41, name: 'Daniela Amodei', netWorth: 830, age: 36, source: 'Artificial Intelligence', state: 'California' },
  { rank: 42, name: 'Martine Rothblatt', netWorth: 820, age: 69, source: 'Pharmaceuticals', state: 'Florida' },
  { rank: 43, name: 'Susan Wojcicki', netWorth: 800, age: 55, source: 'Google', state: 'California' },
  { rank: 44, name: 'Nancy Zimmerman', netWorth: 780, age: 60, source: 'Hedge Funds', state: 'Massachusetts' },
  { rank: 45, name: 'April Anthony', netWorth: 760, age: 57, source: 'Healthcare', state: 'Texas' },
  { rank: 45, name: 'Beyonce Knowles', netWorth: 760, age: 42, source: 'Music', state: 'California' },
  { rank: 47, name: 'Kylie Jenner', netWorth: 710, age: 26, source: 'Cosmetics', state: 'California' },
  { rank: 48, name: 'Joan Payden', netWorth: 700, age: 92, source: 'Money Management', state: 'California' },
  { rank: 49, name: 'Mary West', netWorth: 690, age: 78, source: 'Telemarketing', state: 'California' },
  { rank: 50, name: 'Neha Narkhede', netWorth: 680, age: 39, source: 'Software', state: 'California' },
  { rank: 51, name: 'Janice Bryant Howroyd & Family', netWorth: 675, age: 71, source: 'Staffing', state: 'Nevada' },
  { rank: 52, name: 'Pamela M. Lopker', netWorth: 670, age: 69, source: 'Software', state: 'Washington' },
  { rank: 52, name: 'Kathleen Hildreth', netWorth: 670, age: 62, source: 'Airplane maintenance', state: 'Texas' },
  { rank: 54, name: 'Jamie Kern Lima', netWorth: 650, age: 46, source: 'Cosmetics', state: 'California' },
  { rank: 54, name: 'Annie Lamont', netWorth: 650, age: 67, source: 'Venture Capital', state: 'Connecticut' },
  { rank: 56, name: 'Kit Crawford', netWorth: 580, age: 65, source: 'Clif Bar', state: 'California' },
  { rank: 57, name: 'Donna Karan', netWorth: 570, age: 75, source: 'Fashion', state: 'New York' },
  { rank: 58, name: 'Judy Sheindlin', netWorth: 560, age: 81, source: 'Television shows', state: 'Florida' },
  { rank: 59, name: 'Victoria Zoellner', netWorth: 550, age: 81, source: 'Hedge Fund', state: 'New Jersey' },
  { rank: 59, name: 'Celine Dion', netWorth: 550, age: 56, source: 'Music', state: 'Nevada' },
  { rank: 59, name: 'Young Sohn', netWorth: 550, age: 65, source: 'Software', state: 'New York' },
  { rank: 62, name: 'Jacqueline Reses', netWorth: 530, age: 54, source: 'Payments Software', state: 'California' },
  { rank: 63, name: 'Nichole Mustard', netWorth: 510, age: 51, source: 'Personal finance', state: 'California' },
  { rank: 64, name: 'Lucy Guo', netWorth: 500, age: 29, source: 'Artificial Intelligence', state: 'Florida' },
  { rank: 64, name: 'Danielle Steel', netWorth: 500, age: 76, source: 'Books', state: 'California' },
  { rank: 64, name: 'Kathy Fields', netWorth: 500, age: 66, source: 'Skincare', state: 'California' },
  { rank: 67, name: 'Paige Mycoskie', netWorth: 490, age: 44, source: 'Fashion', state: 'Texas' },
  { rank: 68, name: 'Nora Roberts', netWorth: 480, age: 73, source: 'Books', state: 'Maryland' },
  { rank: 68, name: 'Fawn Weaver', netWorth: 480, age: 47, source: 'Whiskey', state: 'Tennessee' },
  { rank: 70, name: 'Susan Wagner', netWorth: 470, age: 63, source: 'Asset Management', state: 'New York' },
  { rank: 70, name: 'Therese', netWorth: 470, age: 62, source: 'Software', state: 'California' },
  { rank: 72, name: 'Ruth Porat', netWorth: 460, age: 66, source: 'Google', state: 'California' },
  { rank: 72, name: 'Patricia Gallup', netWorth: 460, age: 70, source: 'IT Reseller', state: 'New Hampshire' },
  { rank: 72, name: 'Kendra Scott', netWorth: 460, age: 50, source: 'Jewelry', state: 'Texas' },
  { rank: 72, name: 'Barbra Streisand', netWorth: 460, age: 82, source: 'Music', state: 'California' },
  { rank: 76, name: 'Phebe Novakovic', netWorth: 450, age: 66, source: 'Aerospace', state: 'Virginia' },
  { rank: 76, name: 'Jenny Just', netWorth: 450, age: 56, source: 'Fintech', state: 'Illionis' },
  { rank: 76, name: 'Dolly Parton', netWorth: 450, age: 78, source: 'Music, investments', state: 'Tennessee' },
  { rank: 76, name: 'Ellen DeGeneres', netWorth: 450, age: 66, source: 'Television Shows', state: 'California' },
  { rank: 80, name: 'Reeze Witherspoon', netWorth: 440, age: 48, source: 'Entertainment', state: 'California' },
  { rank: 80, name: 'Katie Rodan', netWorth: 440, age: 68, source: 'Skincare', state: 'California' },
  { rank: 82, name: 'Liz Elting', netWorth: 430, age: 58, source: 'Translation services', state: 'New York' },
  { rank: 83, name: 'Adi Tatarko', netWorth: 420, age: 51, source: 'Home Design', state: 'California' },
  { rank: 84, name: 'Merrilee Kick', netWorth: 400, age: 61, source: 'Alcohol', state: 'Texas' },
  { rank: 84, name: 'Pleasant Rawland', netWorth: 400, age: 83, source: 'American Girl Dolls', state: 'Wisconsin' },
  { rank: 84, name: 'Whitney Wolfe Herd', netWorth: 400, age: 34, source: 'Dating App', state: 'Texas' },
  { rank: 87, name: 'Emma Grede', netWorth: 390, age: 41, source: 'Apparel', state: 'California' },
  { rank: 87, name: 'Sonia Gardner', netWorth: 390, age: 62, source: 'Finance', state: 'New York' },
  { rank: 87, name: 'Doreen Granpeesheh', netWorth: 390, age: 61, source: 'Healthcare', state: 'Florida' },
  { rank: 90, name: 'Christina Cacioppo', netWorth: 385, age: 36, source: 'Software', state: 'California' },
  { rank: 91, name: 'Toni Ko', netWorth: 380, age: 51, source: 'Cosmetics', state: 'California' },
  { rank: 91, name: 'Lynda Weinman', netWorth: 380, age: 69, source: 'Online Education', state: 'California' },
  { rank: 93, name: 'Patricia Miller', netWorth: 360, age: 85, source: 'Accessories', state: 'Indiana' },
  { rank: 93, name: 'Caryn Seidman-Becker', netWorth: 360, age: 51, source: 'Airport security', state: 'New York' },
  { rank: 95, name: 'Iman Abuzeid', netWorth: 350, age: 39, source: 'Healthcare marketplace', state: 'Texas' },
  { rank: 95, name: 'Katy Perry', netWorth: 350, age: 39, source: 'Music', state: 'California' },
  { rank: 97, name: 'Indra Naoyi', netWorth: 340, age: 68, source: 'PepsiCo', state: 'Connecticut' },
  { rank: 97, name: 'Daphne Koller', netWorth: 340, age: 55, source: 'Software', state: 'California' },
  { rank: 97, name: 'Serena Williams', netWorth: 340, age: 42, source: 'Tennis', state: 'Florida' },
  { rank: 100, name: 'Mary Callahan Erdoes', netWorth: 300, age: 56, source: 'Money Management', state: 'New York' },
];

export default function Table() {
  const [members] = useState(membersData);

  return (
    <div style={{ color: '#ffffff', fontFamily: 'system-ui', margin: '0px 90px' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', margin: '0px 10px', fontWeight: '700' }}>
          <span style={{ marginBottom: '0px', fontSize: '30px' }}>Self-Made Women: 2024</span>
          <span style={{ marginBottom: '0px', marginLeft: 'auto', fontSize: '15px', textTransform: 'uppercase' }}>
            Ranking the wealthiest 100
          </span>
        </div>
        <div style={{ backgroundColor: '#ffffff', height: '10px', margin: '5px 5px' }}></div>
      </div>
      <div id="filters" style={{ marginTop: '30px' }}>
        <span id="filter-reset">OVERALL</span>
        <span>AGE</span>
        <span>NET WORTH</span>
      </div>
      <hr />
      <div className="header" id="header" style={{ display: 'flex', marginTop: '30px' }}>
        <span style={{  flex: '1', marginRight:'0px', paddingLeft: '0px', paddingRight: '0px'}}>RANK</span>
        <span style={{  flex: '1', marginRight:'255px', paddingLeft: '0px', paddingRight: '0px' }}>NAME</span>
        <span style={{  flex: '1', marginRight:'40px', paddingLeft: '0px', paddingRight: '0px' }}>NET WORTH</span>
        <span style={{  flex: '1', marginRight:'133px', paddingLeft: '0px', paddingRight: '0px' }}>AGE</span>
        <span style={{  flex: '1', marginRight:'180px', paddingLeft: '0px', paddingRight: '0px' }}>SOURCE</span>
        <span style={{  flex: '1' }}>STATE</span>
      </div>
      <div id="members-container" style={{ marginTop: '30px', fontSize: '13px', fontWeight: '500' }}>
      {members.map((member) => (
            <div key={member.rank} style={{ display: 'flex', marginBottom: '10px', marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #ccc' }}>
              <span style={{ marginLeft: '40px', marginRight: '80px' }}>{member.rank}.</span>
              <span style={{ flex: '1', marginRight: '255px'  }}>{member.name}</span>
              <span style={{ flex: '1', marginRight: '40px'  }}> {member.rank <= 27
        ? `${member.netWorth.toFixed(1)}B` 
        : member.rank >= 32
        ? `${member.netWorth.toFixed(1)}M` 
        : `${member.netWorth.toFixed(1)}M`}</span>
              <span style={{ flex: '1', marginRight: '133px'  }}>{member.age}</span>
              <span style={{ flex: '1', marginRight: '180px'  }}>{member.source}</span>
              <span style={{ flex: '1' }}>{member.state}</span>
            </div>
        ))}
      </div>
    </div>
  );
}