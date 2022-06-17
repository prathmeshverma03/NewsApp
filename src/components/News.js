import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  /*article=[
    {
      "source": { "id": null, "name": "The Indian Express" },
      "author": "Express Web Desk",
      "title": "Russia Ukraine War News Live Updates: Ukraine ignores Sievierodonetsk ultimatum; Biden announces $1 billion worth of additional arms - The Indian Express",
      "description": "Russia Ukraine War News Today, Russia Ukraine Zelenskyy News Updates",
      "url": "https://indianexpress.com/article/world/russia-ukraine-war-latest-news-severodonetsk-zelenskyy-putin-live-updates-7970216/",
      "urlToImage": "https://images.indianexpress.com/2022/06/kharkiv-train.jpg",
      "publishedAt": "2022-06-16T14:21:44Z",
      "content": "Russian troops control about 80% of the fiercely contested eastern city of Sievierodonetsk and have destroyed all three bridges leading out of it but Ukrainians were still trying to evacuate the woun… [+1097 chars]"
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "Hubble Telescope Observes White Dwarf Star Ripping Up An Entire Planetary System - Swarajya",
      "description": null,
      "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DF1JNTjtr2KM",
      "urlToImage": null,
      "publishedAt": "2022-06-16T14:15:00Z",
      "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
    },
    {
      "source": { "id": null, "name": "Thewire.in" },
      "author": null,
      "title": "Traces of Polio Found in Kolkata Sewer, Officials Say No Cause For Alarm Yet - The Wire",
      "description": "‘It is not unusual to find a vaccine virus. We have heightened surveillance,’ health department officials said.",
      "url": "https://thewire.in/health/traces-of-polio-found-in-kolkata-sewer-officials-say-no-cause-for-alarm-yet",
      "urlToImage": "https://cdn.thewire.in/wp-content/uploads/2018/10/23151611/download-2-800x400.jpeg",
      "publishedAt": "2022-06-16T14:07:08Z",
      "content": "Kolkata: Traces of the polio virus was found in sewage water of Kolkata’s Metiabruz in late May but have been found to be inactive, reports have said.\r\nWhile India was declared polio free eight years… [+2030 chars]"
    },
    {
      "source": { "id": null, "name": "DNA India" },
      "author": "DNA Web Team",
      "title": "NASA Perseverance rover spots mysterious shiny foil piece between rocks on Mars, know what it is - DNA India",
      "description": "As per Perseverance officials, the shiny foil spotted by NASA Mars rover is part of a thermal blanket - a material used to control temperatures.",
      "url": "https://www.dnaindia.com/science/report-nasa-perseverance-rover-spots-mysterious-shiny-foil-piece-between-rocks-on-mars-know-what-it-is-2961202",
      "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/16/2347162-untitled-design-76.png",
      "publishedAt": "2022-06-16T14:04:00Z",
      "content": "NASA’s Mars Perseverance rover has spotted a shiny silver object that looks like a discarded packet or foil stuck between two rocks on the Red Planet.\r\nThe image, captured by the rover’s left Mastcam… [+1834 chars]"
    },
    {
      "source": { "id": null, "name": "NDTV News" },
      "author": null,
      "title": "US Cosmetics Giant Revlon Files For Bankruptcy - NDTV",
      "description": "US cosmetics giant Revlon has filed for bankruptcy after years of stiff competition from rivals focused on online sales and supply chain problems.",
      "url": "https://www.ndtv.com/world-news/us-cosmetics-giant-revlon-files-for-bankruptcy-3073006",
      "urlToImage": "https://c.ndtvimg.com/2022-06/n93nm84g_reuters-image_625x300_11_June_22.jpg",
      "publishedAt": "2022-06-16T13:32:02Z",
      "content": "Revlon reported a net loss of $67 million from January to March.\r\nNew York: US cosmetics giant Revlon has filed for bankruptcy after years of stiff competition from rivals focused on online sales and… [+1678 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": "Mohammad Isam",
      "title": "TV coverage in Bangladesh unlikely for Antigua Test - ESPNcricinfo",
      "description": "This could be the first time since 2001 that a Test in which Bangladesh are playing in will not be shown",
      "url": "https://www.espncricinfo.com/story/wi-vs-ban-1st-test-tv-coverage-in-bangladesh-unlikely-for-antigua-test-1320226",
      "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/340000/340017.6.jpg",
      "publishedAt": "2022-06-16T13:29:56Z",
      "content": "Chances are the Antigua test will be available only on ICC's streaming channel in Bangladesh  •  AFP/Getty Images"
    },
    {
      "source": { "id": null, "name": "Hindustan Times" },
      "author": "HT News Desk",
      "title": "'Didn't assault, lost balance': Renuka Chowdhury after ‘grabbing’ cop's collar - Hindustan Times",
      "description": "Congress leader Renuka Chowdhury said she did not even know the cop whose collar she held on to after losing her balance. She said she will apologise to the young man but the police should say sorry too for posting so many male officials.  | Latest News India",
      "url": "https://www.hindustantimes.com/india-news/didnt-assault-lost-balance-renuka-chowdhury-after-grabbing-cop-s-collar-101655384266360.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/06/16/1600x900/renuka_1655384465701_1655384474441.JPG",
      "publishedAt": "2022-06-16T13:04:05Z",
      "content": "Congress leader Renuka Chowdhury on Thursday said she did not assault the cop after a case was filed against her for assaulting a police officer. The Congress leader said she lost balance as she was … [+1948 chars]"
    },
    {
      "source": { "id": null, "name": "Abplive.com" },
      "author": "ABP News Bureau",
      "title": "Agnipath Scheme May Turn Out To Be Case Of 'Penny Wise And Security Foolish': Chidambaram - ABP Live",
      "description": "Agnipath Scheme: The country's Defense Minister Rajnath Singh announced the launch of a scheme named 'Agnipath' on June 14.",
      "url": "https://news.abplive.com/news/navy-to-recruit-3-000-agniveers-under-new-agnipath-scheme-in-first-year-1537633",
      "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2022/06/16/10bca6e505db82f0f7c84521b51eac9e_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
      "publishedAt": "2022-06-16T12:41:59Z",
      "content": "New Delhi: Amid the ongoing protests across several states against the new Agnipath scheme for recruiting soldiers across the three services, senior Congress leader P Chidambaram on Thursday termed t… [+2825 chars]"
    },
    {
      "source": { "id": "the-times-of-india", "name": "The Times of India" },
      "author": "TIMESOFINDIA.COM",
      "title": "Coronavirus: Study finds why some people are more prone to long COVID - Times of India",
      "description": "Understanding the SARs-CoV-2 virus and its implications has remained a task for many scientists and medical professionals. With different variants emerging time and again, the vaccine-makers have also faced quite many challenges.",
      "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/coronavirus-study-finds-why-some-people-are-more-prone-to-long-covid/photostory/92251864.cms",
      "urlToImage": "https://static.toiimg.com/photo/92251875.cms",
      "publishedAt": "2022-06-16T12:30:00Z",
      "content": "The researchers, with the help of their machine learning tool, determined that severe COVID-19 is largely associated with a weakened response from two well-known immune cells - natural killer (NK) ce… [+1411 chars]"
    },
    {
      "source": { "id": null, "name": "Hindustan Times" },
      "author": "Rezaul H Laskar",
      "title": "Hina Khar leads Pak’s hard push to get off FATF grey list. Decision tomorrow - Hindustan Times",
      "description": "Pakistan was placed in the FATF grey list, or list of countries under increased monitoring, in June 2018. A Pakistan media report cited unnamed officials as saying that Islamabad will stay on the grey list till at least February 2023. | World News",
      "url": "https://www.hindustantimes.com/india-news/hina-rabbani-khar-leads-pak-s-hard-push-to-get-off-fatf-grey-list-decision-tomorrow-101655380229257.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/06/16/1600x900/beaa7acc-ed69-11ec-8ce9-c5e14b8baf57_1655380459180.jpg",
      "publishedAt": "2022-06-16T11:50:28Z",
      "content": "Pakistan is not expected to exit the Financial Action Task Forces (FATF) grey list during a meeting in Germany this week despite a high-profile effort mounted by Islamabad to convince the multilatera… [+2269 chars]"
    },
    {
      "source": { "id": null, "name": "India Education Diary" },
      "author": "iednewsdesk",
      "title": "Massachusetts Institute of Technology: Astronomers discover a multiplanet system nearby - India Education Diary",
      "description": "Astronomers at MIT and elsewhere have discovered a new multiplanet system within our galactic neighborhood that lies just 10 parsecs, or about 33 light-years, from Earth, making it one of the closest known multiplanet systems to our own.At the heart",
      "url": "https://indiaeducationdiary.in/massachusetts-institute-of-technology-astronomers-discover-a-multiplanet-system-nearby/",
      "urlToImage": "https://indiaeducationdiary.in/wp-content/uploads/2021/12/Massachusetts-Institute-of-Technology.jpg",
      "publishedAt": "2022-06-16T11:44:58Z",
      "content": "Astronomers at MIT and elsewhere have discovered a new multiplanet system within our galactic neighborhood that lies just 10 parsecs, or about 33 light-years, from Earth, making it one of the closest… [+5810 chars]"
    },
    {
      "source": { "id": null, "name": "NDTV News" },
      "author": null,
      "title": "Pregnant Sonam Kapoor, Through The \"No-Filter\" Lens Of Husband Anand Ahuja - NDTV Movies",
      "description": "Sonam Kapoor and Anand Ahuja's posts make every day phenomenal",
      "url": "https://www.ndtv.com/entertainment/pregnant-sonam-kapoor-through-the-no-filter-lens-of-husband-anand-ahuja-3072821",
      "urlToImage": "https://c.ndtvimg.com/2022-06/ebb338l_-sonam-_625x300_16_June_22.jpg",
      "publishedAt": "2022-06-16T11:42:16Z",
      "content": "From Sonam Kapoor's maternity diaries.(courtesy: anandahuja)\r\nNew Delhi: Anand Ahuja delighted his Instafam with \"no-filter\" pictures of wife Sonam Kapoor on Thursday. In the pictures, Sonam Kapoor c… [+1448 chars]"
    },
    {
      "source": { "id": "the-times-of-india", "name": "The Times of India" },
      "author": "ET Telecom",
      "title": "PUBG developer Krafton creates 'hyper-realistic' virtual human - ETTelecom",
      "description": "With human-like features, such as the baby hairs and fluff on her skin, ANA truly looks unlike any other virtual human that currently exists through other technologies, the company said in a statement late on Wednesday.",
      "url": "https://telecom.economictimes.indiatimes.com/news/pubg-developer-krafton-creates-hyper-realistic-virtual-human/92254909",
      "urlToImage": "https://etimg.etb2bimg.com/thumb/msid-92254909,imgsize-40092,width-1200,height-628,overlay-ettelecom/pubg-developer-krafton-creates-hyper-realistic-virtual-human.jpg",
      "publishedAt": "2022-06-16T11:28:00Z",
      "content": "New Delhi: PUBGgame developer Krafton has unveiled the first images of ANA, the companys virtual human that looks real and is powered by hyperrealism and deep learning.ANA is the first virtual human … [+1411 chars]"
    },
    {
      "source": { "id": null, "name": "Abplive.com" },
      "author": "Shayak Majumder",
      "title": "Xbox Series S, Controller, Wireless Headset Price Tipped To Increase This Month - ABP Live",
      "description": "Xbox Series S will see a price hike of Rs 2,000.",
      "url": "https://news.abplive.com/gaming/xbox-price-hike-increase-series-s-controller-wireless-headset-cost-inr-exchange-rate-usd-microsoft-june-30-1537617",
      "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2022/06/16/0748466cea89d7bbd1184aed98fcb12f_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
      "publishedAt": "2022-06-16T11:24:58Z",
      "content": "Xbox Series S, the entry-level next-gen gaming console from Microsoft, is tipped to see a hike in price in India later this month. Along with the Series S, Xbox Controller and Xbox Wireless Headset w… [+1963 chars]"
    },
    {
      "source": { "id": null, "name": "Moneycontrol" },
      "author": "Rakesh Patil",
      "title": "Closing Bell: Nifty ends below 15,400, Sensex falls 1,045 pts; metals worst hit - Moneycontrol",
      "description": "All the sectoral indices ended in the red with metal index fell 5 percent.",
      "url": "https://www.moneycontrol.com/news/business/markets/share-market-live-updates-stock-market-today-june-16-latest-news-bse-nse-sensex-nifty-covid-coronavirus-usha-martin-jyothy-labs-voltamp-transformers-upl-indian-overseas-bank-nbcc-astron-paper-8693001.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2020/01/BSE_Sensex_Stocks_market_red_down-770x433.png",
      "publishedAt": "2022-06-16T11:13:36Z",
      "content": "June 16, 2022 / 04:43 PM IST\r\nAjit Mishra, VP - Research, Religare Broking:\r\nMarkets tanked on the weekly expiry day and lost over 2%, tracking feeble global cues. Initially, the benchmark opened wit… [+917 chars]"
    },
    {
      "source": { "id": null, "name": "NDTV News" },
      "author": "NDTV Sports Desk",
      "title": "India Vs South Africa: \"If People Like You Go To Gym,\" Ruturaj Gaikwad Trolls Yuzvendra Chahal - NDTV Sports",
      "description": "India and South Africa next meet for the fourth T20I at the Saurashtra Cricket Association Stadium, Rajkot on Friday. It is worth noting that South African batter Aiden Markram has been ruled out of the series after he tested positive for COVID-19.",
      "url": "https://sports.ndtv.com/india-vs-south-africa-2022/if-people-like-you-go-to-gym-ruturaj-gaikwad-trolls-yuzvendra-chahal-after-indias-win-over-south-africa-in-3rd-t20i-3072335",
      "urlToImage": "https://c.ndtvimg.com/2022-06/o7lrm1uo_yuzvendra-chahal-and-ruturaj-gaikwad_625x300_15_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
      "publishedAt": "2022-06-16T10:05:09Z",
      "content": "Team India opener Ruturaj Gaikwad jokingly trolled teammate Yuzvendra Chahal for his physique after the young Indian side came roaring back in the T20I series. During an interaction with the leg spin… [+2115 chars]"
    },
    {
      "source": { "id": null, "name": "Livemint" },
      "author": "Livemint",
      "title": "Maharashtra SSC 10th result 2022 to be declared tomorrow at 1 pm. Details here | Mint - Mint",
      "description": "Maharashtra SSC Results 2022: Maharashtra education minister Varsha Gaikwad will soon announce the date and time of the SSC result declaration for the current academic session",
      "url": "https://www.livemint.com/news/india/maharashtra-ssc-10th-result-2022-to-be-declared-tomorrow-at-1-pm-details-here-11655371020988.html",
      "urlToImage": "https://images.livemint.com/img/2022/06/16/600x338/maharashtra_ssc_result_2022_1655371294079_1655371294273.jpg",
      "publishedAt": "2022-06-16T09:22:10Z",
      "content": "Maharashtra SSC Results 2022: Maharashtra State Board of Secondary and Higher Secondary Education, MSBSHSE will announce the SSC results 2022 on 17 June at 1 pm. The decision was confirmed by Maharas… [+734 chars]"
    },
    {
      "source": { "id": null, "name": "NDTV News" },
      "author": null,
      "title": "'Agnipath' Protests Spread, Bihar BJP Office Vandalised, Leader Attacked - NDTV",
      "description": "Agnipath, the tour of duty scheme, proposes the recruitment of jawans on a contractual basis for a four-year period followed by compulsory retirement for most without gratuity and pension benefits.",
      "url": "https://www.ndtv.com/india-news/agnipath-scheme-violent-protests-in-bihar-tear-gas-fired-3071554",
      "urlToImage": "https://c.ndtvimg.com/2022-06/q8tick_train-coach-set-on-fire_650x400_16_June_22.jpg",
      "publishedAt": "2022-06-16T09:13:00Z",
      "content": "Police had to fire tear gas shells at the aggressive protestors in Arrah.\r\nPatna: Protests against Agnipath, a radical recruitment plan for the armed forces, turned violent today as Army aspirants di… [+4563 chars]"
    },
    {
      "source": { "id": "the-times-of-india", "name": "The Times of India" },
      "author": "Reuters",
      "title": "SpiceJet hikes airfares up to 15% on fuel, forex costs - Economic Times",
      "description": "Aviation turbine fuel prices have increased by more than 120% since June 2021. This massive increase is not sustainable,  airline managing director Ajay Singh said in a statement, asking the federal and state governments to cut taxes.",
      "url": "https://economictimes.indiatimes.com/industry/transportation/airlines-/-aviation/spicejet-hikes-airfares-up-to-15-on-fuel-forex-costs/articleshow/92247434.cms",
      "urlToImage": "https://img.etimg.com/thumb/msid-92247577,width-1070,height-580,imgsize-74210,overlay-economictimes/photo.jpg",
      "publishedAt": "2022-06-16T09:10:00Z",
      "content": "said on Thursday fares need to be raised as much as 15% to counter high fuel costs and a weak rupee which have lifted operating costs to unsustainable levels.\r\nBoth factors have left domestic airline… [+883 chars]"
    },
    {
      "source": { "id": null, "name": "Deccan Herald" },
      "author": null,
      "title": "News Live: Water cannons, tear gas used on Cong workers in Kerala, Shivakumar, Siddaramaiah and others detained in K'taka - Deccan Herald",
      "description": "Track the latest news and updates from India and across the world, only with DH.",
      "url": "https://www.deccanherald.com/national/live-news-updates-today-news-breaking-june-16-2022-1118553.html",
      "urlToImage": "https://www.deccanherald.com/sites/dh/files/articleimages/2022/06/16/sc-1655374884.jpg",
      "publishedAt": "2022-06-16T08:37:45Z",
      "content": "ASEAN has always stood tall as a beacon of regionalism, multilateralism &amp; globalisation, says Jaishankar\r\n\"It has successfully carved out a niche for itself in the region &amp; provided a foundat… [+89 chars]"
    }
  ];*/
    constructor(props){
        super(props);
        this.state={
            articles : []
        }
    }
  static propTypes = {}
  async componentDidMount() { 
    let url=this.props.url;
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({articles: parsedData.articles})
  }

  render() {
    return (
        <>
            <div className="row text-center my-3">
                {
                    this.state.articles.map((x)=>(<div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-around my-2" key={x.url}>
                        <NewsItem title={x.title} description={x.description} imageURL={x.urlToImage} newsURL={x.url}/>
                        </div>))
                }  
                
                
            </div>
      </>
    )
  }
}

export default News