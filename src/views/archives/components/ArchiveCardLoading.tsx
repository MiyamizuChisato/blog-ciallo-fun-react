import {Card, CardBody, CardFooter, CardHeader, Skeleton} from "@nextui-org/react";

export default function ArchiveCardLoading() {
    return (
        <Card className="transition-none" shadow="md" radius="md">
            <CardHeader>
                <Skeleton className="w-2/3 rounded-md transition-none">
                    <div className="h-5 w-3/5 bg-default-200"></div>
                </Skeleton>
            </CardHeader>
            <CardBody className="py-0">
                <Skeleton className="rounded-lg aspect-[2.1] transition-none">
                    <div className="bg-default-300"></div>
                </Skeleton>
            </CardBody>
            <CardFooter>
                <div className="w-full">
                    <div>
                        <Skeleton className="rounded-lg transition-none">
                            <div className="h-3 bg-default-300"></div>
                        </Skeleton>
                        <Skeleton className="w-3/7 mt-2 rounded-lg transition-none">
                            <div className="h-3 bg-default-300"></div>
                        </Skeleton>
                    </div>
                    <div>
                        <Skeleton className="mt-4 rounded-lg transition-none">
                            <div className="h-5 bg-default-300"></div>
                        </Skeleton>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
