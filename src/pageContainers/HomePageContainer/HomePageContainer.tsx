import {SectionCards} from '@/components/section-cards';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const HomePageContainer = () => {
  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards/>
              <div className="px-4 lg:px-6">
                <Card className="@container/card">
                  <CardHeader className="relative">
                    <CardTitle>Total Visitors</CardTitle>
                    <CardDescription>
                      <span className="@[540px]/card:block hidden">
                        Total for the last 3 months
                      </span>
                      <span className="@[540px]/card:hidden">Last 3 months</span>
                    </CardDescription> 
                  </CardHeader>
                  <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                    Hello Friend
                  </CardContent>
                </Card>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePageContainer;
