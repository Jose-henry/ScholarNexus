import Skeleton, { SkeletonTheme  } from "react-loading-skeleton"

export default function Loading() {
    return (
       
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton
                count={10}
                duration={2}
                style={{ borderRadius: 10 }}
                height={40} 
                width={40}/>
            </SkeletonTheme>
       
    )
}