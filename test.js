const test = require("ava")
const hsimp = require(".")

test("main", (t) => {
	t.deepEqual(hsimp("123"), {
		time: "24 nanoseconds",
		level: "warning",
		checks: [
			{
				name: "Length: Very short",
				message: "Your password is very short. The longer a password is the more secure it will be.",
				level: "warning",
			},
			{
				name: "Character Variety: Just Numbers",
				message: "Your password only contains numbers. This reduces the number of possible combinations dramatically.",
				level: "warning",
			},
			{
				name: "Possibly a Telephone Number / Date",
				message: "Your password looks like it might be a telephone number or a date. If it is and it has personal significance then it might be very easy for someone to guess.",
				level: "warning",
			},
		],
	})
})
