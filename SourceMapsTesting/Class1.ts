module SourceMapTesting {
    export class Class1 {

        //This method is defined on line 6 of Class1.ts
        //The first line of code is on line 8.
        public static GetClassNameStatic() {

            var namePart = "Class";
            var numberPart = 1;
            return namePart + numberPart;

        }
    }
}