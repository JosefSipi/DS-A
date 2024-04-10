// Function to test your solution
function minMeetingRooms(intervals) {

    if(intervals.length === 0) return 0
    // Your solution goes here
    let numMeetingRooms = 1;
    let startTimeSmallest = undefined;
    let endTimeLargest = undefined;

    intervals.forEach((meeting) => {
        // console.log(meeting)
        let startTime = meeting[0];
        let endTime = meeting[1];

        console.log(startTime)
        // console.log(endTime)


        if(startTimeSmallest != undefined){
            if(startTime < endTimeLargest){
                numMeetingRooms = numMeetingRooms + 1
                endTimeLargest = endTime
                startTimeSmallest = startTime
            } else {
                startTime = startTime
                endTime = endTime
            }
        } else {
            startTimeSmallest = startTime
            endTimeLargest = endTime
        }


   
    });

    console.log(numMeetingRooms + "min num meetings required")

    return numMeetingRooms;
}

// Test cases
const testCases = [
    {
        input: [[0, 30], [50, 100], [150, 200]],
        expected: 1
    },
    {
        input: [[0, 30], [15, 20], [50, 100]],
        expected: 2
    },
    {
        input: [[0, 30]],
        expected: 1
    },
    {
        input: [],
        expected: 0
    },
    {
        input: [[0, 30], [30, 40]],
        expected: 1
    },
    {
        input: [[0, 30], [20, 40]],
        expected: 2
    },
    {
        input: [[0, 30], [15, 20], [25,50], [50, 100]],
        expected: 2
    },
];

// Function to run tests
function runTests() {
    testCases.forEach((testCase, index) => {
        const result = minMeetingRooms(testCase.input);
        console.log(`Test Case ${index + 1}:`, result === testCase.expected ? 'PASS' : 'FAIL');
    });
}

// Run the tests
runTests();
