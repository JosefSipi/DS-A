// Function to test your solution
function minMeetingRooms(intervals) {
    // Your solution goes here
    let numMeetingRooms = 0;
    let startTimeSmallest = undefined;
    let endTimeLargest = undefined;

    intervals.forEach((meeting) => {
        let startTime = meeting[0];
        let endTime = meeting[1];

        if(startTimeSmallest === undefined){
            startTimeSmallest = startTime
            endTimeLargest = endTime
            return
        }

        if(startTime < startTimeSmallest){
            numMeetingRooms += 1
        } else {
            startTime = startTime
            endTime = endTime
        }

        // I need to find total number of meetings that overlap at one time
        // my solution assumes all meetings are listed in order of earliest to latest start times

    });

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
        expected: 1
    }
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
