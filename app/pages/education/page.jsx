"use client";

import BlurFade from "../../../components/magicui/blur-fade";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";

export default function Education() {
  return (
    <>
      <div className="w-full text-4xl sm:text-5xl font-extrabold text-left px-10 sm:px-24 font-righteous">
        Education
      </div>
      <BlurFade className="flex flex-col gap-10 sm:flex-row items-start justify-start px-10 sm:px-24 mt-10 overflow-hidden">
        <div className="w-full flex flex-col sm:flex-col gap-10  justify-start items-start">
          <Tabs defaultValue="primary" className=" w-full ">
            <TabsList className="w-full flex justify-start gap-3 items-start">
              <TabsTrigger value="primary" className="">
                Higher
              </TabsTrigger>
              <TabsTrigger value="secondary" className="">
                Secondary
              </TabsTrigger>
              <TabsTrigger value="higher" className="">
                Primary
              </TabsTrigger>
            </TabsList>
            <TabsContent value="primary">
              <Card className="w-full text-left text-4xl dark:text-zinc-400 text-zinc-600 leading-relaxed">
                <CardHeader className="">
                  <CardTitle>Srinivas University</CardTitle>
                  <CardDescription>
                    Bachelor of Technology - Computer Science
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-1 mt-2">
                  <p className="text-sm">
                    <strong>Key Courses : </strong> Data Structures and
                    Algorithms, Operating Systems, Database Management Systems,
                    Web, CyberSecurity, Microprocessors Development, Machine
                    Learning, and Artificial Intelligence.
                  </p>
                  <div className="mt-2 text-sm">
                    <strong>Projects : </strong>
                    <ul className="list-disc list-inside">
                      <li className="mt-2">
                        <strong>Home Automation App : </strong> Developed a
                        full-stack app using Java, Php, and mySql, implementing
                        features like automated switch authentication,
                        appliances listing, and a login flow.
                      </li>
                      <li className="mt-2">
                        <strong>Machine Learning Model : </strong> Created a
                        predictive model using Python and scikit-learn to
                        analyze and forecast stock market trends, achieving a
                        90% accuracy rate.
                      </li>
                    </ul>
                  </div>
                  <p className="mt-2 text-sm">
                    <strong>Extracurricular Activities : </strong> Member of the
                    Computer Science Club, participated in hackathons, and
                    volunteered as a coding tutor for underclassmen.
                  </p>
                  <p className="mt-2 text-sm">
                    <strong>Awards and Recognitions : </strong> National level
                    paper presentation runner up (2022-2023)
                  </p>
                </CardContent>
                <div className="flex justify-between mt-2 text-sm">
                  <CardFooter>
                    <strong>2019 - 2023</strong>
                  </CardFooter>
                  <CardFooter>
                    <strong>9.53 cgpa</strong>
                  </CardFooter>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="secondary">
              <Card className="w-full text-left text-4xl dark:text-zinc-400 text-zinc-600 leading-relaxed">
                <CardHeader>
                  <CardTitle>MGM PU University</CardTitle>
                  <CardDescription>PCMCS - Computer Science</CardDescription>
                </CardHeader>
                <CardContent className="space-y-1 mt-2">
                  <p className="text-sm">
                    <strong>Key Subjects : </strong> Physics, Chemistry,
                    Mathematics, Computer Science.
                  </p>
                  <div className="mt-2 text-sm">
                    <strong>Projects : </strong>
                    <ul className="list-disc list-inside">
                      <li className="mt-2">
                        <strong>Physics Project on Circuit Design : </strong>
                        Designed and tested circuits to explore the principles
                        of current, voltage, and resistance, applying
                        theoretical physics concepts and gaining practical
                        knowledge in the field.
                      </li>
                      <li className="mt-2">
                        <strong>
                          Computer Science Project on Basic Algorithms :
                        </strong>{" "}
                        Developed and implemented basic algorithms in C++ for
                        sorting and searching data efficiently.
                      </li>
                    </ul>
                  </div>
                  <p className="mt-2 text-sm">
                    <strong>Extracurricular Activities : </strong> Member of the
                    Computer Science Club, participated in coding competitions,
                    and volunteered in organizing science exhibitions.
                  </p>
                </CardContent>
                <div className="flex justify-between mt-2 text-sm">
                  <CardFooter>
                    <strong>2017 - 2018</strong>
                  </CardFooter>
                  <CardFooter>
                    <strong>79.5 %</strong>
                  </CardFooter>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="higher">
              <Card className="w-full text-left text-4xl dark:text-zinc-400 text-zinc-600 leading-relaxed ">
                <CardHeader>
                  <CardTitle>GM Vidyanikethan Public School</CardTitle>
                  <CardDescription>
                    Secondary School Leaving Certificate
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-1 mt-2">
                  <p className="text-sm">
                    <strong>Key Subjects : </strong> Mathematics, Science,
                    Social Studies, English, Hindi, Computer Science, and
                    Environmental Science.
                  </p>

                  <p className="mt-2 text-sm">
                    <strong>Extracurricular Activities : </strong> Active member
                    of the school cricket team, participated in inter-school
                    tournaments, and was involved in the schools drama club,
                    performing in annual plays.
                  </p>
                  <p className="mt-2 text-sm">
                    <strong>Awards and Recognitions : </strong> Best Student
                    Award in 10th standard, First Place in the School Quiz
                    Competition (2015), and Certificate of Merit for consistent
                    academic performance.
                  </p>
                </CardContent>
                <div className="flex justify-between mt-2 text-sm">
                  <CardFooter>
                    <strong>2016 - 2017</strong>
                  </CardFooter>
                  <CardFooter>
                    <strong>9.6 cgpa</strong>
                  </CardFooter>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </BlurFade>
    </>
  );
}
