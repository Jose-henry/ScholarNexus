import Skeleton, { SkeletonTheme  } from "react-loading-skeleton"

export default function Loading() {
    return (
       
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton
                count={9}
                duration={300}
                style={{ borderRadius: 10 }}
                height={10} 
                width={40}/>
            </SkeletonTheme>
       
    )
}