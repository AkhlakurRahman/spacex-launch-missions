const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

// Launch Type
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    details: { type: GraphQLString },
    rocket: { type: RocketType }
  })
});

// Rocket Type
const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
    cost_per_launch: { type: GraphQLInt },
    first_flight: { type: GraphQLString },
    boosters: { type: GraphQLInt },
    description: { type: GraphQLString },
    success_rate_pct: { type: GraphQLInt }
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      resolve: async (parent, args) => {
        const response = await axios.get(
          'https://api.spacexdata.com/v3/launches'
        );
        return response.data;
      }
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt }
      },
      resolve: async (parent, args) => {
        const response = await axios.get(
          `https://api.spacexdata.com/v3/launches/${args.flight_number}`
        );
        return response.data;
      }
    },
    rockets: {
      type: new GraphQLList(RocketType),
      resolve: async (parent, args) => {
        const response = await axios.get(
          'https://api.spacexdata.com/v3/rockets'
        );
        return response.data;
      }
    },
    rocket: {
      type: RocketType,
      args: {
        rocket_id: { type: GraphQLString }
      },
      resolve: async (parent, args) => {
        const response = await axios.get(
          `https://api.spacexdata.com/v3/rockets/${args.rocket_id}`
        );
        return response.data;
      }
    }
  }
});

module.exports = new GraphQLSchema({ query: RootQuery });
