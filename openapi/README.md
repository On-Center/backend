# OpenAPI Project for TestBank

This project defines an OpenAPI specification for managing Bank resources. It includes endpoints for creating and retrieving bank information, secured with OAuth 2.0 Bearer authentication.

## Project Structure

- **index.yaml**: Main entry point for bundling the OpenAPI definition.
- **paths/**: Contains endpoint definitions.
  - **banks.yaml**: Defines endpoints related to the Bank resource.
- **components/**: Contains reusable components.
  - **schemas/**: Data models (DTOs).
    - **Bank.yaml**: Schema definition for the Bank resource.
  - **parameters/**: Common parameters for endpoints.
  - **responses/**: Common responses for endpoints.
  - **securitySchemes/**: Authentication schemes.
    - **BearerAuth.yaml**: Defines the Bearer authentication scheme.
- **info.yaml**: Metadata about the API (title, version, contact).
- **tags.yaml**: Tags for grouping endpoints.
- **README.md**: Documentation for the project.

## Authentication

This API uses OAuth 2.0 Bearer authentication. Ensure to include a valid token in the Authorization header for secured endpoints.

## Endpoints

### Banks

- **POST /banks**: Create a new bank.
  - **Request Body**: Must conform to the Bank schema.
  - **Response**: Returns the created bank object on success.

## Usage

To use this API, ensure you have the necessary authentication token and make requests to the defined endpoints as per the specifications. 

For further details, refer to the individual YAML files for specific endpoint definitions, schemas, and security configurations.