import { createSlice, legacy_createStore } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = { 
    list:[
        {
            id:1,
            title:"How Iran's economic woes created conditions ripe for protests",
            country:"Middle East",
            catagory:"War",
            short_content:"Nika Shakarami's mother confirms she is the girl seen burning her headscarf on a Tehran street.",
            content_title:"For the past four weeks, the cries of 'woman, life, freedom' and 'death to the dictator' have been heard in dozens of cities across Iran, as protesters have vented their anger at the country's mandatory hijab laws and the Supreme Leader, Ayatollah Ali Khamenei.",
            content_para:[
                "The protests were sparked by the death last month of Mahsa Amini, a 22-year-old woman who fell into a coma after being detained by the morality police for allegedly failing to cover her head sufficiently.",
                "Although people have been taking to the streets to express their anger at the political and social repression in the Islamic Republic, the state of the economy had already created a sense of despair.",
            ],
            news_type:"National",
            author:"By Imran Qureshi",
            image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/14B17/production/_126995748_gettyimages-1243649069.jpg.webp",
            date:"4 september 2022",
        },
        
        {
            id:3,
            title:"India village goes offline daily to help people talk",
            country:"India",
            catagory:"Story",
            short_content:"A Maharashtra village switches off TV and internet for a few hours daily - and the results are worth it.",
            content_title:"A village in India's Maharashtra state has declared 'independence' from two modern-day addictions - television and mobile internet. At least, for a couple of hours every day.",
            content_para:[
                "A siren goes off at 7pm every evening in Vadgaon village in Sangli district, an indication to all residents to switch off their TV sets and mobile phones.",
                "The two instruments of 'addiction' can be switched on when the village council sounds the siren again at 8.30pm.",
                "Vadgaon has a population of about 3,000 people, made up largely of farmers and sugar mill workers.",
                "Mr Mohite said children had become dependent on TV and mobile phones for online classes during the Covid-19 pandemic. As educational institutions reopened this year, children returned to regular classes in schools and colleges.",
    
            ],
            news_type:"National",
            author:"By Imran Qureshi",
            image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/3D42/production/_127028651_whatsappimage2022-10-10at9.10.35am.jpg.webp",
            date:"4 september 2022",
        },
        {
            id:4,
            title:"Leicester disorder: Police announce six further arrests",
            country:"Australiya",
            catagory:"Story",
            short_content:"It follows a decade-long investigation with several countries into lucrative business contracts.",
            content_title:"Six more arrests have been made as part of a police investigation into disorder in East Leicester last month.",
            content_para:[
                "Leicestershire Police said the six arrests made during the past eight days had taken the total up to 57.",
                "Major disorder broke out in East Leicester on Saturday 17 September amid tensions involving mainly young men from sections of the Muslim and Hindu communities.",
                "The number of people to have been charged remains at nine.",
                "The force's inquiries are also looking at events leading up to the 17 September disorder, with several arrests made in relation to a fight on 4 September."
            ],
            news_type:"National",
            author:"By Tom Oakley",
            image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/5CDA/production/_126907732_lmdisorder.jpg.webp",
            date:"4 september 2022",
        },
        {
            id:5,
            title:"Ukraine war: Liberated town shows human cost of Russia's defeat",
            country:"Ukraine",
            catagory:"War",
            short_content:"",
            content_title:"Victory can look desolate.",
            content_para:[
                "It does inside the eastern Ukrainian town of Lyman, retaken from the Russians at the weekend. The deserted debris-strewn streets are lined by boarded up or burnt-out buildings. Metal sheeting dangling from smashed roofs is buffeted by the wind. Few civilians venture out. We counted almost as many dogs as people - though the population was around 20,000 before the war.",
                "The handful of civilians we met seem shell-shocked by months of bombardment, and uncertain their ordeal is over.",
                "The only surge of life was a convoy of Ukrainian troops riding high on top of armoured personnel carriers, waving and cheering, as they headed out of town, along a road bordered by pine forest.",
            ],
            news_type:"International",
            author:"By Orla Guerin",
            image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/F664/production/_126967036_wide-shot.jpg.webp",
            date:"5 october 2022",
        },
        {
            id:6,
            title:"Ukraine regains Kherson villages from Russians",
            country:"Ukraine",
            catagory:"War",
            short_content:"",
            content_title:"Ukrainian forces have liberated a key village in the southern region of Kherson, hastening another Russian military retreat.",
            content_para:[
                "The defence ministry in Kyiv posted a video showing the 35th marine brigade hoisting a Ukrainian flag above Davydiv Brid, amid reports of several other nearby villages being recaptured.",
                "Russian forces have already been forced to retreat in Ukraine's north-east.",
                "Their latest setbacks came as President Vladimir Putin was due to sign into force decrees annexing four Ukrainian regions, while war was raging in all four.",
                "The annexation has no legitimacy under international law and Ukraine's President Volodymyr Zelensky has declared them null and void.",
            ],
            news_type:"International",
            author:"By Paul Kirby",
            image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/8EED/production/_126998563_f34c6a681b18ab88a25d8b547b92517a80a561dd0_258_4957_27891000x563.jpg.webp",
            date:"5 october 2022",
        },
        {
            id:7,
            title:"Ukraine war in maps: Where have missiles hit?",
            country:"Russia",
            catagory:"War",
            short_content:"",
            content_title:"Russia has launched missiles at several cities in Ukraine - including Kyiv - two days after the only bridge linking Russia with occupied Crimea was damaged in a blast.",
            content_para:[
                "Missile strikes have been reported in cities including Kyiv, Lviv, Dnipro and Zaporizhzhia, in what appears to be the most widespread set of Russian attacks since the early weeks of the war",
                "Russia has partially reopened the bridge linking it to Crimea, which is an important supply route for Russian forces fighting in Ukraine",
                "Ukrainian troops have continued to progress after breaking through Russian defences in the southern Kherson region",
                "In Donetsk, Ukrainian forces are pushing east, having taken the town of Lyman"
            ],
            news_type:"International",
            author:"By The Visual Journalism Team",
            image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/7FC9/production/_127031723_ukraine_russian_control_areas_map_explosions_09_10_2x640-nc-1.png.webp",
            date:"3 september 2022",
        },
        {
            id:8,
            title:"How many nuclear weapons does Russia have?",
            country:"Russia",
            catagory:"War",
            short_content:"",
            content_title:"Putin threats: How many nuclear weapons does Russia have?",
            content_para:[
                "All figures for nuclear weapons are estimates but, according to the Federation of American Scientists, Russia has 5,977 nuclear warheads - the devices that trigger a nuclear explosion - though this includes about 1,500 that are retired and set to to be dismantled.",
                "Of the remaining 4,500 or so, most are considered strategic nuclear weapons - ballistic missiles, or rockets, which can be targeted over long distances. These are the weapons usually associated with nuclear war."
            ],
            news_type:"International",
            author:"By The Visual Journalism Team",
            image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/4FAC/production/_123469302_nuclear_headerv2_29feb-nc.png.webp",
            date:"1 september 2022",
        },
        
        {
            id:9,
            title:"Fat Bear Week winner crowned after cheating scandal",
            country:"Russia",
            catagory:"Story",
            short_content:"",
            content_title:"After a six-day battle and vast amounts of salmon, Fat Bear Week has a winner.",
            content_para:[
                "Brown bear 747, tipping the scales at an estimated 1,400lbs (635kg), won 68,105 votes, beating Bear 901 with 56,876 votes.",
                "The result marks an end to Fat Bear Week 2022, which saw people from around the world vote for the fattest bruin at Alaska's Katmai National Park.",
                "The chow down spotlights the park's famous brown bears as they feed in preparation for winter hibernation.",
                "But Bear 747 nearly didn't make it to the final because of an unprecedented case of voter fraud in the semi-finals that was quickly corrected by officials."
            ],
    
            news_type:"International",
            author:"By Imran Qureshi",
            image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/6F3B/production/_127057482_52403134745_8b6642424f_c.jpg",
            date:"12 september 2022",
        },
        {
            id:10,
            title:"Elon Musk denies he spoke to Putin about Ukraine war",
            country:"USA",
            catagory:"War",
            short_content:"",
            content_title:"Elon Musk has denied reports he spoke to Vladimir Putin before posting a Twitter poll with his suggestions for ending Russia's invasion of Ukraine.",
            content_para:[
                "Ian Bremmer, head of the Eurasia Group political risk consultancy, alleged that Mr Musk had personally told him about the conversation with Mr Putin.",
                "But Mr Musk has now refuted this.",
                "'I have spoken to Putin only once and that was about 18 months ago. The subject matter was space,' Mr Musk tweeted.",
                "The suggestions included a proposal to hold votes in parts of Ukraine occupied by Russia that the Kremlin says it has annexed. His comments were welcomed by Moscow.",
                "The multi-billionaire said: 'Russia leaves if that is will of the people.'"
            ],
            news_type:"National",
            author:"By Imran Qureshi",
            image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/16770/production/_127061029_mediaitem127061028.jpg.webp",
            date:"12 september 2022",
        },
        {
            id:11,
            title:"Murder, She Wrote star Angela Lansbury dies at 96",
            country:"China",
            catagory:"Story",
            short_content:"",
            content_title:"Dame Angela Lansbury, who won international acclaim as the star of the US TV crime series Murder, She Wrote, has died aged 96.",
            content_para:[
                "The three-time Oscar nominee had a career spanning eight decades, across film, theatre and television.",
                "Born in 1925, she was one of the last surviving stars of the Golden Age of Hollywood cinema.",
                "Dame Angela died in her sleep just five days before her 97th birthday, her family said in a statement.",
    
            ],
            news_type:"National",
            author:"By Imran Qureshi",
            image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/FEAB/production/_127059156_1f3b7885e3e04d497b672b29bef593c91bc974f10_0_2643_18731000x709.jpg.webp",
            date:"13 september 2022",
        },
        {
            id:12,
            title:"Rob Burrow BBC documentary: 'I'm a prisoner in my own body'",
            country:"Australiya",
            catagory:"Sports",
            short_content:"One of Great Britain's greatest rugby league players, Rob Burrow, is being helped into a swimming pool by his wife, Lindsey.",
            content_title:"One of Great Britain's greatest rugby league players, Rob Burrow, is being helped into a swimming pool by his wife, Lindsey.",
            content_para:[
                "It is the only way that the former England, Great Britain and Leeds Rhinos player can manage to walk without suffering debilitating pain in his joints caused by Motor Neurone Disease (MND).",
                "I know when you get married you say, 'in sickness and in health'I did not think she signed up to look after me so soon' he jokes.",
                "In another scene, his mum, Irene, spoon-feeds him.",
                "I need my parents for everything. It's like I'm their kid again.",
                "Burrow is characteristically jolly and cheeky throughout, joking with the camera crew as they document his life since his diagnosis for a new BBC documentary, 'Rob Burrow: Living With MND'."
            ],
            news_type:"International",
            author:"By Simon Stone",
            image:"https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/8F58/production/_127069663_whatsubject.jpg",
            date:"5 october 2022",
        },
        {
            id:13,
            title:"Cristiano Ronaldo: Manchester United will fight any attempt to ban Portugal forward over his improper conduct charge",
            country:"Australiya",
            catagory:"Sports",
            short_content:"",
            content_title:"Manchester United will fight any attempt to ban Cristiano Ronaldo over the mobile phone incident at Everton in April.",
            content_para:[
                "United manager Erik ten Hag said on Wednesday the Portugal forward 'will not accept' the Football Association's 'improper and/or violent conduct' charge.",
                "Ronaldo received a police caution after he knocked a phone out of a fan's hands in an incident following a 1-0 defeat by Everton at Goodison Park.",
                "He had been given until Monday evening to respond to the FA charge, which could only be brought following the end of Merseyside Police's involvement in the case in August."
            ],
            news_type:"International",
            author:"By Simon Stone",
            image:"https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/12918/production/_127065067_gettyimages-1243854254.jpg",
            date:"6 october 2022",
        },
        {
            id:14,
            title:"Pauline Ferrand-Prevot: Ineos Grenadiers sign first female rider",
            country:"Australiya",
            catagory:"Sports",
            content_title:"Ineos Grenadiers have signed French multiple world champion Pauline Ferrand-Prevot for 2023.",
            content_para:[
                "The 30-year-old is the first female rider to be signed by the team, who are diversifying from their roots in road cycling.",
                "Ferrand-Prevot has won eight mountain bike world titles as well as road, cyclocross and gravel world titles.",
                "Ferrand-Prevot won the road world title in 2014, became cyclocross world champion in 2015 and last weekend won the inaugural Gravel World Championships.",
                "neos' men's team have had huge success since joining the road cycling World Tour in 2010 - as Team Sky - including seven Tour de France wins."
            ],
            short_content:"",
            news_type:"International",
            author:"By Harry Poole",
            image:"https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/829C/production/_127063433_paulineferrandprevot.jpg",
            date:"6 october 2022",
        },
        {
            id:15,
            title:"Burgos: The record-breaking Spanish minnows beginning to dream of La Liga",
            country:"USA",
            catagory:"Sports",
            short_content:"",
            content_title:"There can be few occasions when the 36th minute of a football match has been celebrated as much as it was at El Plantio stadium.",
            content_para:[
                "It was during an impressive 3-0 victory over league leaders Alaves on Saturday that Burgos goalkeeper Jose Antonio Caro, known as Churripi, surpassed ex-Barcelona keeper Claudio Bravo's Spanish record of 755 minutes without conceding a goal at the start of a season.",
                "When we got the record all the stadium was applauding, we had the number on the screen and in the second half we were able to keep the record in our hands, Michu says.",
                "Spanish second division side Burgos have made a remarkable start to the campaign and sit two points off top spot after 10 games - having scored just six times and recorded six goalless draws."
            ],
            news_type:"International",
            author:"By Harry Poole",
            image:"https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/14586/production/_127043338_cfburgossssss.jpg",
            date:"8 october 2022",
        },
        {
            id:16,
            title:"England in Australia: Dawid Malan and Sam Curran shine to help seal T20 series",
            country:"USA",
            catagory:"Sports",
            short_content:"",
            content_title:"Dawid Malan and Sam Curran starred as England edged world champions Australia by eight runs to take an unassailable 2-0 lead in their three-match Twenty20 series.",
            content_para:[
                "Malan smashed 82 from 49 deliveries to lead the recovery after England were reduced to 54-4 in Canberra.",
                "He was ably supported by Moeen Ali (44) as they put on 92 for the fifth wicket to help England reach 178-7 from their 20 overs.",
                "Curran was then the pick of the bowlers, taking 3-25, including the wicket of Tim David for 40 in a critical 18th over that tipped the game in the tourists' favour.",
                "The Surrey all-rounder also held onto a smart catch to remove Mitchell Marsh, who was looking well set on 45 from 29 balls, as England's superior fielding proved the difference, with Australia only able to reach 170-6."
            ],
            news_type:"International",
            author:"By Tom Mallows",
            image:"https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/C82E/production/_127064215_gettyimages-1432800875.jpg",
            date:"9 october 2022",
        },
        {
            id:17,
            title:"Jane Couch: The inspiring story of Britain's first female world champion boxer",
            country:"Australiya",
            catagory:"Sports",
            short_content:"",
            content_title:"On Saturday night, Savannah Marshall and Claressa Shields will make history as the first female fighters to headline at the O2 Arena in London. It will be an all-female card, the first in the UK.",
            content_para:[
                "It is a landmark moment, 24 years on from another - the legal battle that allowed women the right to box professionally in this country.",
                "Jane Couch was the fearless driving force behind that.",
                "Now 54 and retired for nearly 14 years, she is a massive fan of Marshall - a big-punching 31-year-old from Hartlepool who has had to overcome many of the same challenges Couch did, despite the decades separating their careers.",
                "Marshall considered walking away from pro boxing several times, fearing her talents would never be recognised or properly compensated."
            ],
            news_type:"International",
            author:"By Chris Evans",
            image:"https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/34F4/production/_112765531_insight_couch_index.png",
            date:"9 october 2022",
        },
        
        {
            id:19,
            title:"Wildlife Photographer of the Year: Frenzied bee ball wins top prize",
            country:"China",
            catagory:"Science",
            short_content:"",
            content_title:"It's a manic moment as male cactus bees envelop a single female. But who in this amorous scrum will emerge lucky and get to mate with her?",
            content_para:[
                "This remarkable picture, captured by Karine Aigner, is the grand title winner in this year's Wildlife Photographer of the Year competition.On one level it's quite a technical image. It required the use of a macro probe lens to get in close to the very heart of the action.",
                "The American is only the fifth woman to win the top prize in the 58-year history of WPY, as the competition is often called.",
                "It wasn't something I went looking for. I've been working on a ranch in South Texas for years, and I just happened on the location. I saw all these little 'volcanoes' in the ground - the individual burrows dug by the females to make their nests,' she told BBC News."
            ],
            news_type:"International",
            author:"By Jonathan Amos",
            image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/7781/production/_127039503_karine-aigner-wpy.jpg",
            date:"10 october 2022",
        },
        {
            id:20,
            title:"Nasa's Dart spacecraft 'changed path of asteroid'",
            country:"USA",
            catagory:"Science",
            short_content:"",
            content_title:"The American space agency says its recent attempt to deflect the path of an asteroid was successful.",
            content_para:[
                "Scientists have now confirmed the orbit of a 160m-wide (520ft) space rock known as Dimorphos was altered when the Dart probe struck it head on last month.",
                "Researchers came to the conclusion after making measurements using a range of space and Earth-based telescopes.",
                "The mission was conceived to test a potential strategy to defend the Earth against threatening objects.",
                "Dart's achievement proves such an idea would work, provided it was initiated early enough and the target wasn't overly massive."
            ],
            news_type:"International",
            author:"By Jhon",
            image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/14933/production/_127057248_ddd5155f-24a5-480a-a370-8e9208b82fea.png.webp",
            date:"10 october 2022",
        },
        {
            id:21,
            title:"Space, the unseen frontier in the war in Ukraine",
            country:"USA",
            catagory:"Science",
            short_content:"",
            content_title:"The war in Ukraine has underlined the growing importance of space to armies on the ground.",
            content_para:[
                "Gen Raymond - whose service is the newest branch of the US armed forces - avoids giving precise details of how the US and its allies have been helping Ukraine.",
                "But he gives a clear indication of what it's been doing. 'We use space to help strike with precision, we use space to provide warnings of missiles, of any threat that could come to the United States or to our allies or partners,' he says.",
                "There are already more than 5,000 satellites in space - most are operated for commercial purposes.",
                "But among them are hundreds of dedicated military satellites - the US, Russia and China having the largest number.",
    
            ],
            news_type:"International",
            author:"By Jonathan Beale",
            image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/A336/production/_126928714_b0a32bac-445b-4598-8128-c2778620a212.jpg.webp",
            date:"10 october 2022",
        },
        {
            id:22,
            title:"Greenland's future may be written under North Sea",
            country:"Greenland",
            catagory:"Science",
            short_content:"",
            content_title:"There are clues to the near-future behaviour of a warming Greenland, and perhaps even a warming Antarctic, buried under the North Sea.",
            content_para:[
                "Look below its bottom muds and you will find immense valleys. Hundreds of them.",
                "They were carved by rivers of meltwater running beneath the ice sheet that covered Northern Europe towards the end of Earth's last major cold phase.",
                "Modern seismic (sound wave) data gathered by oil and gas prospectors has brought a new clarity that has enabled scientists to study the hidden features in greater detail.",
                "In places, the channels are more like canyons - up to 150km long, 6km wide and 500m deep."
            ],
            news_type:"International",
            author:"By Jhon",
            image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/AC8C/production/_120427144_europemap-nc.png.webp",
            date:"12 october 2022",
        },
        {
            id:23,
            title:"Nasa, SpaceX study Hubble telescope re-boost mission",
            country:"USA",
            catagory:"Science",
            short_content:"",
            content_title:"Nasa and the SpaceX rocket company are to study the feasibility of running a private astronaut mission to extend the life of the Hubble telescope.",
            content_para:[
                "The orbiting observatory, one of the greatest instruments in the history of science, is gradually losing altitude.",
                "If nothing is done to re-boost it, the telescope will eventually fall into the atmosphere and burn up.",
                "Hubble was serviced on five occasions by astronauts in Nasa's space shuttle, the last time being in 2009.",
                "Since then, the telescope has come down by about 25km and now circles the Earth at a height of 540km.",
                "Ideally, Nasa would like to get the observatory back up to the 600km altitude where it was positioned at launch in 1990.",
    
            ],
            news_type:"International",
            author:"By Jhon",
            image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/1149A/production/_126901807_28223588012_33c7051b12_o.jpg.webp",
            date:"6 october 2022",
        },
        {
            id:24,
            title:"Revealed: Huge gas flaring emissions never reported",
            country:"Russia",
            catagory:"Science",
            short_content:"",
            content_title:"Major oil companies are not declaring a significant source of greenhouse gas emissions, a BBC News investigation has revealed.",
            content_para:[
                "The BBC found millions of tonnes of undeclared emissions from gas flaring at oil fields where BP, Eni, ExxonMobil, Chevron and Shell work.",
                "The companies said their reporting method was standard industry practice.",
                "Flared gases emit a potent mix of carbon dioxide, methane and black soot which pollute the air and accelerate global warming.",
                "The BBC has also found high levels of potentially cancer-causing chemicals in Iraqi communities near oil fields where there is gas flaring. These fields have some of the highest levels of undeclared flaring in the world, according to our findings.",
    
            ],
            news_type:"International",
            author:"By Esme Stallard, Owen Pinnell & Jess Kelly",
            image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/11B3D/production/_126890527_28.kidsatfencelineinfrontofgasflaringfromnahranomarextrawide-chusseinfaleh_bbc-1.jpg.webp",
            date:"11 october 2022",
        },
        {
            id:25,
            title:"Black, Korean and searching for the American dream",
            country:"Canada",
            catagory:"Story",
            short_content:"",
            content_title:"An outcast from birth, Milton Washington is the child of a Korean woman and a black US soldier, who became a 'slickyboy', or child thief, and dreamed of making it to America. At the age of eight, he seized his chance.",
            content_para:[
                "When a beautiful car pulled up one day outside St Vincent's orphanage in South Korea, Milton Washington made a split-second decision that would change the course of his life.",
                "A black American couple stepped out. The man was in military uniform, the woman had an Afro and wore a beautiful flowing dress, and when Milton realised that they were going to adopt his friend Joseph - who was black and Korean just like him - he ran to the couple's car, jumped inside and locked all the doors.",
                "Crying and screaming for his life, he wasn't getting out unless the man and woman took him home with them too."
            ],
            news_type:"National",
            author:"By Laura Thomas",
            image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/1454F/production/_126897238_976x549miltonateasterage9justpost-adoptioninrghhousingcomplexkorea_creditmiltonwashington.jpg.webp",
            date:"4 october 2022",
        },
        {
            id:26,
            title:"Charity research finds that only 1% of disability hate crimes end with a charge",
            country:"Middle East",
            catagory:"Story",
            short_content:"",
            content_title:"Of the thousands of disability hate crimes reported to the police last year, just 1% resulted in criminal charges, two charities have revealed.",
            content_para:[
                "Leonard Cheshire and United Response submitted Freedom of Information requests to 43 police forces in England and Wales and 36 responded.",
                "It found that out of more than 11,000 reports, 99% of cases went no further.",
                "The National Police Chiefs' Council said it wanted 'to understand the reasons' behind the low number."
            ],
            news_type:"National",
            author:"By Keiligh Baker",
            image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/A776/production/_127007824_mediaitem127007823.jpg.webp",
            date:"10 september 2022",
        },
        {
            id:27,
            title:"I went undercover to expose abuse at a mental health hospital",
            country:"UK",
            catagory:"Story",
            short_content:"",
            content_title:"A vulnerable young woman is locked on the other side of a thick glass window, crying like I have never heard anyone cry before.",
            content_para:[
                "For hours I have been sitting outside the small room, listening to her desperate pleas to be let out.",
                "This is the image that haunts me from the three months I spent working undercover for BBC Panorama as a healthcare support worker.",
                " went in to investigate whistleblower allegations about staff behaviour and patient safety at the Edenfield Centre in Prestwich, near Manchester - one of the UK's biggest mental health hospitals.",
                "It could be a frightening place for patients and staff.",
    
                
            ],
            news_type:"National",
            author:"By Alan Haslam",
            image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/27C1/production/_126877101_alan-12.jpg.webp",
            date:"10 october 2022",
        },
        {
            id:28,
            title:"Hospital seclusion: 'I've been treated like an animal'",
            country:"Canada",
            catagory:"Story",
            short_content:"By Panorama team and William McLennan",
            content_title:"Evidence of abusive and inappropriate treatment of vulnerable patients at a secure mental health hospital has been uncovered by BBC Panorama. One young woman was locked in a seclusion room for 17 days, was then allowed out for a day, only to be hauled back in for another 10 days. Staff - who are paid to provide round-the-clock care - described her as a 'cancer' who 'needs a good thrashing'. She and her family have agreed to share their story.",
            content_para:[
                "Warning: This story contains references to self-harm",
                "Harley was sitting on the floor wearing pink pyjamas, with her hair tied up in neat braids, when hospital staff piled through the door one after another.",
    
            ],
            news_type:"National",
            author:"By Panorama team and William McLennan",
            image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/00B1/production/_126877100_screenshot2022-09-27at17.48.49.png.webp",
            date:"10 october 2022",
        },
        {
            id:29,
            title:"Growing up around land-mines: How the Falklands conflict shaped me",
            country:"London",
            catagory:"Story",
            short_content:"",
            content_title:"On Friday 2 April 1982, Argentina invaded the British overseas territory of the Falkland Islands.",
            content_para:[
                "Britain, under Prime Minister Margaret Thatcher, assembled warships, refitted merchant ships and sent a task force 8,000 miles (12,900 km) across the globe to the South Atlantic.",
                "Over the next 10 weeks, 649 Argentine military personnel, 255 British military personnel, and three Falkland Islanders were killed.",
                "Forty years on, Tamsin McLeod, an islander who grew up in the shadow of the conflict and now lives in London, tells the BBC what her homeland means to her - and how the island families coped with their peaceful lives being thrust into the arena of war."
            ],
            news_type:"National",
            author:"By Jho",
            image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/15207/production/_123953568_gettyimages-110149414.jpg.webp",
            date:"10 october 2022",
        },
        
        
    ],
    login:{
        request :'candidate_login',
        email : "",
        password : ""
    },
    login_state:false,
    filterCatagory:[],
    register:{
        request : 'create_candidate',
        name : '',
        email : '',
        password : '',
        aadhar : '',
        address : '',
        phone:'',
        city:'',
        area:'',
        pin:'',
    },
    registerState:false,       
    pathName:null,
    
}

const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        setLogin(state,action){
            state.login=action.payload
        },
        logstate(state,action){
            state.login_state=action.payload
        },
        setCatagory(state,action){
            state.filterCatagory=action.payload
        },
        setRegister(state,action){
            state.register=action.payload
        },
        RegisterState(state,action){
            state.registerState=action.payload
        },
        setPathName(state,action){
            state.pathName=action.payload
        }
    }
})

export const Log_in=(login)=>async(dispatch)=>{
    const {data}=await axios.post('http://karka.academy/api/action.php',JSON.stringify(login))
    if(data.status=='success'){
        localStorage.setItem('userLogin',true)
       localStorage.setItem('user_name',data.data.name)
       dispatch(logstate(true))
    }      
           
           console.log(`detals`,data)
}

export const userRegister=(register)=>async(dispatch)=>{
    const {data}=await axios.post('https://karka.academy/api/action.php?',JSON.stringify(register))
        console.log(data)
        if(data.status=='success'){
            dispatch(RegisterState(true))
        }
}


export const { setLogin,logstate,setCatagory,setRegister ,RegisterState,setPathName}=counterSlice.actions
export default counterSlice.reducer

