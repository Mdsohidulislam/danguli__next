import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { uid } from 'uid';  
import { useRouter } from 'next/router';  
import NavbarDatabase from '../../utils/database/NavbarDatabase';

export default function SideNavbar() {
    let topCategory = 'Computer & Accessories';
    let topLinks = ["YouTube Studio Gears",
                    "Smart Home Improvement",
                    "Headphone & Earphone",
                    "Mobile Accessories",
                    "Consumer Electronics",
                    "Computer & Office",
                    "Home Appliances",
                    "Home Decor & ShowpieceWatches Collection",
                    "Health, Fashion & Grooming",
                    "Deals of the DayDeals of the DayBest SellersBicycle & Accessories",]

    const router = useRouter();

    const handleGoChildPage = (father, parent, child) => {
        console.log(father, parent, child);  
        router.push({
            pathname: '/BrandView',
            query: { topCategory, category:father, collection: parent, brandOrType: child, afk: uid(10)},
        })
    }

    const handleCloseNavbar = () => {
        document.querySelector('.next__side__navbar__container').classList.toggle('open')
    }


  return (
    <div className='next__side__navbar__container'>
        <div className='container'> 
        <TreeView
        aria-label="multi-select"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        multiSelect 
        >
            {
                topLinks.map((topCategoryInfo, setTopCategoryInfo) => {
                    return <TreeItem label={`${topCategoryInfo}`} nodeId={`${uid()}`} key={uid()}>
                    {
                        NavbarDatabase.map((info, index) => <TreeItem nodeId={`${uid()}`} label={`${info.link__name}`} key={index}>
                            {
                                info.links.map((parentInfo, parentInfoIndex) => <TreeItem nodeId={`${uid()}`} label={`${parentInfo.link__name}`} key={index+parentInfoIndex}>
                                    {
                                        parentInfo.links.map((childInfo,    childInfoIndex) => <TreeItem onClick={()=>handleGoChildPage(info.link__name, parentInfo.link__name, childInfo.link__name)} nodeId={`${uid()}`} label={`${childInfo.link__name}`} key={index+parentInfoIndex+childInfoIndex}></TreeItem>)
                                    }
                                </TreeItem>)
                            }
                        </TreeItem> )
                    }
                </TreeItem>
                })
            }
        
        </TreeView>
        </div>
        <button onClick={handleCloseNavbar} color='secondary' className='close___navbar__button'>X</button>
    </div>
  );
}


