import {Card, CardBody, CardFooter, CardHeader, Chip, Image, Link} from "@nextui-org/react";
import img from "../../../assets/img.jpg"

export default function ArchiveCard() {
    return (
        <Card className="transition-none" shadow="md" radius="md">
            <CardHeader>
                <Link underline="hover" className="cursor-pointer text-xl">
                    New components v2.1.0 🎉
                </Link>
            </CardHeader>
            <CardBody className="py-0">
                <div className="aspect-[2.1]">
                    <Image loading="lazy" className="object-cover aspect-[2.1]" src={img}/>
                </div>
            </CardBody>
            <CardFooter>
                <div className="w-full">
                    <p className="font-normal w-full text-default-600 mb-2 line-clamp-2">
                        We are thrilled to announce the latest update to NextUI
                        We are thrilled to announce the latest update to NextUI
                        to NextUI, version 2.1.0!
                    </p>
                    <div className="flex justify-between items-center">
                        <div className="block text-small text-default-500">August 21, 2023</div>
                        <div>
                            <Chip size="md" color="primary">
                                Docker
                            </Chip>
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
